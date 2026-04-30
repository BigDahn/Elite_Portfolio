import RadialBlur from "./RadialBlur"
import { clsx } from "clsx"

interface HeroProps {
  className: string;

}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={clsx(className, "relative")}>
      <RadialBlur />
    </div>
  )
}

export default Hero
