import { clsx } from "clsx"

interface Heading {
  text: string;
  className?: string;
  textClassName?: string
}

const Headings = ({ text, className, textClassName }: Heading) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className={clsx("h-1.5 bg-yellow-400 w-16 rounded-none", className)} />
      <p className={clsx("jost uppercase text-[16px] font-medium leading-[170%] tracking-[30%]", textClassName)}>
        {text}
      </p>
    </div>
  )
}

export default Headings
