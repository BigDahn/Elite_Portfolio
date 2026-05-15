import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionContentProps {
  children: ReactNode;
  className?: string;
}

const SectionContent = ({ children, className }: SectionContentProps) => {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-0 md:px-0 py-14", className)}>
      {children}
    </div>
  );
};

export default SectionContent;
