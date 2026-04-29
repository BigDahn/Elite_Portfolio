import { SquareArrowOutUpRight } from "lucide-react"

interface ExternalBtnLink {
  text: string;
}

const ExternalLinkButton = ({ text }: ExternalBtnLink) => {
  return (
    <button className="min-w-97.5 flex items-center justify-center bg-white gap-5 rounded-[63.18px]">
      <p className="jost font-semibold text-[20px] leading-[130%] tracking-[-2%]">{text}</p>
      <SquareArrowOutUpRight size={20} />
    </button>
  )
}

export default ExternalLinkButton
