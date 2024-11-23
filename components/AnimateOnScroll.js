"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export function AnimateOnScroll({
  children,
  className = "",
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 }
}) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: true, // Trigger only once
    onChange: (inView) => {
      if (inView && !hasAnimated) {
        setHasAnimated(true); // Lock the animation after the first trigger
      }
    },
  });

  return (
    <motion.div
      ref={ref}
      initial={initial} // Use the initial prop passed from the child
      animate={hasAnimated ? animate : initial} // Animate after first in-view trigger
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
