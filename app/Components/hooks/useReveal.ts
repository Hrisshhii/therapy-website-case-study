"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal(offset = 0) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer=new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: `0px 0px -${offset}px 0px`,
        threshold: 0.1,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [offset]);

  return { ref, show };
}