
"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Skeleton } from "./ui/skeleton"
import { Button } from "./ui/button"

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionData = {
  total: { [year: number]: number };
  contributions: Contribution[];
};

const CELL_SIZE = 12; // h-3, w-3 -> 0.75rem -> 12px
const CELL_GAP = 4; // gap-1 -> 0.25rem -> 4px

const getColorClass = (level: number) => {
    switch (level) {
        case 0: return "bg-muted/50";
        case 1: return "bg-primary/30";
        case 2: return "bg-primary/50";
        case 3: return "bg-primary/70";
        case 4: return "bg-primary";
        default: return "bg-muted/50";
    }
};

const prepareContributionData = (contributions: Contribution[]) => {
  if (!contributions.length) return [];
  
  const firstDay = new Date(contributions[0].date).getDay(); // 0 (Sun) to 6 (Sat)
  const placeholders = Array.from({ length: firstDay }, (_, i) => ({
    date: `placeholder-${i}`,
    count: -1, // Use a special value to identify placeholders
    level: 0,
  }));
  
  return [...placeholders, ...contributions];
};


export function GithubContributionGraph({ username }: { username: string }) {
  const [contributionData, setContributionData] = React.useState<ContributionData | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchContributions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=all`);
        if (!response.ok) {
          throw new Error(`Could not fetch contribution data for ${username}.`);
        }
        const data: ContributionData = await response.json();

        const currentYear = new Date().getFullYear();
        const contributionsThisYear = data.contributions.filter(
          c => new Date(c.date).getFullYear() === currentYear
        );

        const totalThisYear = contributionsThisYear.reduce((acc, c) => acc + c.count, 0);

        const filteredData: ContributionData = {
          total: { [currentYear]: totalThisYear },
          contributions: contributionsThisYear,
        };

        setContributionData(filteredData);
      } catch (err: any)
      {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchContributions();
    }
  }, [username]);

  const preparedData = React.useMemo(() => 
    contributionData ? prepareContributionData(contributionData.contributions) : [],
    [contributionData]
  );
  
  const monthLabels = React.useMemo(() => {
    if (!preparedData.length) return [];
    
    const labels = [
        { month: 'Jan', week: 0 }, { month: 'Feb', week: 4 },
        { month: 'Mar', week: 8 }, { month: 'Apr', week: 13 },
        { month: 'May', week: 17 }, { month: 'Jun', week: 22 },
        { month: 'Jul', week: 26 }, { month: 'Aug', week: 30 },
        { month: 'Sep', week: 35 }, { month: 'Oct', week: 39 },
        { month: 'Nov', week: 44 }, { month: 'Dec', week: 48 }
    ];
    
    return labels;
  }, [preparedData]);
  
  if (error) {
    return (
      <div className="w-full">
        <h2 className="mb-6 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Days I <span className="text-primary">Code</span>
        </h2>
        <Card className="p-4 sm:p-6 text-center text-destructive">
          <p>{error}</p>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="w-full">
        <h2 className="mb-6 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Days I <span className="text-primary">Code</span>
        </h2>
        <Card className="p-4 sm:p-6">
           <Skeleton className="h-32 w-full" />
        </Card>
      </div>
    )
  }

  return (
    <>
      {/* Mobile View */}
      <div className="w-full md:hidden">
        <h2 className="mb-2 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          GitHub Contributions
        </h2>
        <p className="mb-6 text-center text-sm italic text-muted-foreground">
          &ldquo;You don&rsquo;t need to be perfect — just consistent.&rdquo;
        </p>
        <Card className="flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="text-5xl font-bold text-primary">1k+</div>
          <p className="mt-2 text-muted-foreground">contributions this year</p>
          <Button asChild variant="outline" className="mt-4">
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
              View My GitHub
            </a>
          </Button>
        </Card>
      </div>

      {/* Desktop View */}
      <div className="hidden w-full md:block">
        <h2 className="mb-2 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Days I <span className="text-primary">Code</span>
        </h2>
        <p className="mb-6 text-center text-sm italic text-muted-foreground">
          &ldquo;You don&rsquo;t need to be perfect — just consistent.&rdquo;
        </p>
        <Card className="p-4 sm:p-6">
          <div className="overflow-x-auto pb-4">
            <div className="relative h-4 mb-2">
              {monthLabels.map((label) => (
                <span
                  key={label.month}
                  className="absolute text-xs text-muted-foreground"
                  style={{ left: `${label.week * (CELL_SIZE + CELL_GAP)}px` }}
                >
                  {label.month}
                </span>
              ))}
            </div>
            <div className="grid grid-flow-col grid-rows-7 gap-1">
              {preparedData.map((day) =>
                day.count === -1 ? (
                    <div key={day.date} className="h-3 w-3 rounded-sm bg-transparent" />
                ) : (
                <TooltipProvider key={day.date} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className={cn("h-3 w-3 rounded-sm", getColorClass(day.level))} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{day.count === 0 ? 'No' : day.count} contribution{day.count !== 1 && 's'} on {format(new Date(day.date), 'MMMM d, yyyy')}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                )
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary">
              1k+ contributions this year
            </a>
            <div className="hidden items-center gap-2 sm:flex">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="h-2.5 w-2.5 rounded-sm bg-muted/50" />
                <div className="h-2.5 w-2.5 rounded-sm bg-primary/30" />
                <div className="h-2.5 w-2.5 rounded-sm bg-primary/50" />
                <div className="h-2.5 w-2.5 rounded-sm bg-primary/70" />
                <div className="h-2.5 w-2.5 rounded-sm bg-primary" />
              </div>
              <span>More</span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
