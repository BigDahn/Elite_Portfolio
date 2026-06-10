import FooterArc from "../components/FooterArc"
import Hero from "../components/Hero"
import Image from "next/image"

const services = [
  {
    label: "Crypto Consulting",
    description: "Advisory on crypto investment and trading to make."
  },
  {
    label: "Crypto Membership",
    description: "Advisory on crypto investment and trading to make."
  },
  {
    label: "Private Trading Investments",
    description: "Advisory on crypto investment and trading to make."
  },
  {
    label: "Video Content Creation",
    description: "Advisory on crypto investment and trading to make."
  },
  {
    label: "Community Growth Strategies",
    description: "Advisory on crypto investment and trading to make."
  }
]

const Page = () => {
  return (
    <div className="bg-black">
      <Hero className="h-[60vh]">
        <div />
      </Hero>
      <div className="bg-black -space-y-36 pb-24 px-4">
        {services.map((service) => <ServiceCard {...service} key={service.label} />)}
      </div>
      <FooterArc />
    </div>
  )
}

export default Page


interface IServiceCard {
  label: string;
  description: string;
}

const ServiceCard = ({ label, description }: IServiceCard) => {

  return <div className="rounded-t-lg max-w-7xl mx-auto relative h-125">
    <Image src="/Frame 2121453901.png" className="top-24" fill alt="Service Image" />
    <div className="bg-[#0B0B0B] rounded-t-lg p-3 flex items-center z-30 relative justify-center flex-col">
      <h2 className="unbounded text-[20px] text-center lg:text-[50px] text-transparent leading-[93%] py-3 tracking-[-8%] bg-linear-to-b from-white to-blue-800 bg-clip-text">{label}</h2>
      <p className="jost leading-[120%] tracking-[-4%] text-center lg:text-2xl text-white/70">{description}</p>
    </div>
  </div>

}
