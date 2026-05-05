import { clsx } from "clsx";

interface Heading {
  text: string;
  className?: string;
  headerClassName?: string;
  textClassName?: string;
}

const Headings = ({
  text,
  className,
  textClassName,
  headerClassName = "flex items-center gap-x-4",
}: Heading) => {
  return (
    <div className={headerClassName}>
      <div
        className={clsx("h-1.5 bg-yellow-400 w-19 rounded-none", className)}
      />
      <p
        className={clsx(
          "jost uppercase text-[10px] md:text-[16px] font-medium leading-[170%] tracking-[30%]",
          textClassName,
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default Headings;
