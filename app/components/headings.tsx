import { clsx } from "clsx"

interface Heading {
  text: string;
  className?: string;
  textClassName?: string
}

const Headings = ({ text, className, textClassName }: Heading) => {
  return (
    <div>
      <div className={clsx("h-4 bg-yellow-400 w-8 rounded-none", className)} />
      <p className={clsx("jost uppercase text-[15px] font-medium leading-[170%] tracking-[30%]", textClassName)}>
        {text}
      </p>
    </div>
  )
}

export default Headings
