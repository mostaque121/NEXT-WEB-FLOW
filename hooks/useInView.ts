"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type IntersectionOptions = IntersectionObserverInit;

export function useInView(options: IntersectionOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const memoizedOptions = useMemo(() => options, [options]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      console.warn(
        "IntersectionObserver is not supported in this environment. The `useInView` hook will not work as expected."
      );
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, memoizedOptions);

    // Save the current ref locally
    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [memoizedOptions]);

  return [ref, isInView] as const;
}
