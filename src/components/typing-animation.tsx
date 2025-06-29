"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function TypingAnimation({ className, strings }: { className?: string; strings: string[] }) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % strings.length;
    let fullText = strings[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      // Word is fully typed, pause, then start deleting.
      setIsDeleting(true);
      setDelta(1200);
    } else if (isDeleting && updatedText === '') {
      // Word is fully deleted, move to the next word and start typing.
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    } else if (isDeleting) {
      // Currently deleting
      setDelta(50);
    } else {
      // Currently typing
      setDelta(100);
    }
  }

  return (
    <span className={cn("font-semibold text-primary", className)}>
      {text}
      <span className="animate-blink border-l-2 border-primary" />
    </span>
  );
}
