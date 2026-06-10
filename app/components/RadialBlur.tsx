"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type RadialBlurProps = {
  className?: string;
  blurClassName?: string;
  followCursor?: boolean;
  animate?: boolean;
};

const RadialBlur = ({
  className,
  blurClassName,
  followCursor = false,
  animate = false,
}: RadialBlurProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initialize values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    const updatePosition = () => {
      const rect = parent.getBoundingClientRect();
      if (!followCursor) {
        mouseX.set(0); // This won't be used since we toggle styles
        mouseY.set(0);
        return;
      }
      // Initial position: top center of parent
      mouseX.set(rect.width / 2);
      mouseY.set(0);
    };

    updatePosition();
    
    if (!followCursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      
      // We only update if mouse is within parent bounds
      // to fulfill "only follow the cursor in it's own container"
      const isInside = 
        e.clientX >= rect.left && 
        e.clientX <= rect.right && 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom;

      if (isInside) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", updatePosition);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updatePosition);
    };
  }, [followCursor, mouseX, mouseY]);

  const animationProps = animate
    ? {
      animate: {
        scale: [1, 1.1, 0.95, 1.05, 1],
        opacity: [0.7, 0.9, 0.75, 0.85, 0.7],
        rotate: [0, 3, -3, 1, 0],
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    }
    : {};

  return (
    <motion.div
      ref={containerRef}
      {...animationProps}
      style={
        followCursor
          ? {
            position: "absolute",
            top: 0,
            left: 0,
            x: x,
            y: y,
            translateX: "-50%",
            translateY: "-50%",
            zIndex: 0,
          }
          : {}
      }
      className={cn(
        "pointer-events-none",
        !followCursor && "absolute -top-[150px] left-1/2 -translate-x-1/2",
        "h-[350px] w-[700px] rounded-full opacity-40 md:opacity-90 blur-[120px]",
        className
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full opacity-40 md:opacity-90 blur-[120px]",
          blurClassName
        )}
        style={{
          background: `radial-gradient(
            circle,
            rgba(109,59,255,0.85) 0%,
            rgba(91,46,255,0.65) 25%,
            rgba(70,30,200,0.35) 50%,
            rgba(0,0,0,0) 75%
          )`,
        }}
      />
    </motion.div>
  );
};

export default RadialBlur;
