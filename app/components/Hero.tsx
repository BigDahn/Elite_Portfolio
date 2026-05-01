import RadialBlur from "./RadialBlur"
import { clsx } from "clsx"
import React from "react"

interface HeroProps {
  className: string;
  children?: React.ReactNode;
}

const Hero = ({ className, children }: HeroProps) => {
  return (
    <div className={clsx(className, "relative bg-black")}>
      <RadialBlur />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-136 bg-[radial-gradient(circle_at_top,rgba(91,35,255,0.65),rgba(7,6,15,0.12)_42%,rgba(7,6,15,0)_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[100%_4rem,4rem_100%] opacity-20" />
      {children}
    </div>
  )
}

export default Hero
