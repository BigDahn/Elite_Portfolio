import { SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"
import { clsx } from "clsx"

interface ExternalBtnLink {
  text: string;
  href: string;
  className?: string;
  textClassName?: string
}

const ExternalLinkButton = ({ href, text, className, textClassName }: ExternalBtnLink) => {
  return (
    <button className={clsx("max-w-97.5 h-12 md:h-14 flex items-center justify-center bg-white gap-5 rounded-[63.18px]", className)}>
      <Link href={href} className="flex items-center justify-center gap-5">
        <p className={clsx("jost font-semibold text-[14px] md:text-[20px] leading-[130%] tracking-[-2%]", textClassName)}>
          {text}
        </p>
        <SquareArrowOutUpRight size={20} />
      </Link>
    </button>
  )
}

export default ExternalLinkButton
