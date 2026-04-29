import React from "react"
import { clsx } from "clsx"

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;

}

const SectionContainer = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={clsx(className, "md:min-h-190")}>
      {children}
    </section>
  )
}

export default SectionContainer
