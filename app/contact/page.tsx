import { ArrowRight, Mail, MailOpenIcon, MapPin, MessageSquareMore, MessagesSquareIcon, PhoneCall, UserIcon } from "lucide-react";
import Hero from "../components/Hero";
import FooterArc from "../components/FooterArc";

const contactDetails = [
  {
    label: "Phone",
    value: "+234 915 666 9634",
    href: "tel:+2349156669634",
    icon: PhoneCall,
  },
  {
    label: "Email",
    value: "logritardev@icloud.com",
    href: "mailto:logritardev@icloud.com",
    icon: Mail,
  },
  {
    label: "Address",
    value: "456 Garden Lane, Los Angeles, CA, USA",
    href: "#contact-form",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <Hero className="h-[45vh] md:h-[55vh] lg:h-[70vh]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 bg-transparent px-6 md:px-8 lg:flex-row lg:justify-between lg:px-10">
        <div className="w-full">
          <h2 className="unbounded text-3xl font-bold leading-[113%] tracking-[-4%] text-white md:text-4xl lg:text-[50px] lg:tracking-[-11%]">Let’s Build the</h2>
          <h2 className="unbounded text-3xl font-bold leading-[113%] tracking-[-4%] text-white md:text-4xl lg:text-[50px] lg:tracking-[-11%]">Future Together.</h2>
        </div>
        <div className="max-w-2xl lg:max-w-xl">
          <p className="jost text-base font-light leading-[140%] tracking-normal md:text-xl md:tracking-[-2%] lg:text-2xl lg:leading-[120%] lg:tracking-[-4%]">Partner, collaborate, or engage to drive meaningful impact and create lasting value across sectors and communities.</p>
        </div>
      </div>
      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 bg-black px-6 pb-20 pt-16 md:gap-12 md:px-8 md:pt-24 lg:gap-16 lg:px-0 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-end">
          <div className="relative space-y-8 border-l-2 border-[#CC9933] h-full" style={{
            background: "url(/star.jpg)",
            backgroundPosition: "center center"
          }}>
            <div className="bg-black h-full opacity-85 inset-0 absolute" />
            <div className=" h-full z-40 relative flex justify-center py-4 space-y-5 flex-col pl-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a key={item.label} href={item.href} className="flex items-center gap-x-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F8A308] text-white transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="space-y-1">
                      <span className="jakarta block text-lg sm:text-xl capitalize leading-[115.5%] tracking-[-4%] text-white md:text-2xl lg:text-[25px] lg:tracking-[-8%]">
                        {item.label}
                      </span>
                      <span className="jakarta block text-sm leading-[120%] tracking-normal text-white/40 md:text-[15px] md:tracking-[-2%] lg:leading-[73%] lg:tracking-[-4%]">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
          <div
            id="contact-form"
            className="p-4 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-6 lg:p-0"
          >
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="h-12 w-full rounded-none placeholder-jost border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#F8A308]/70 focus:ring-2 focus:ring-[#F8A308]/20"
                />
                <UserIcon className="absolute right-2 top-3 stroke-white/40" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-none border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#F8A308]/70 focus:ring-2 focus:ring-[#F8A308]/20"
                />
                <MailOpenIcon className="absolute right-2 top-3 stroke-white/40" />
              </div>
              <div className="space-y-2 block relative">
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your message"
                  className="resize-none w-full rounded-none border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#F8A308]/70 focus:ring-2 focus:ring-[#F8A308]/20"
                />
                <MessageSquareMore className="absolute right-2 top-3 stroke-white/40" />
              </div>
              <button
                type="submit"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#F8A308] px-6 text-sm font-semibold text-white jost transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send Me a Message
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 -rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <FooterArc className="bg-transparent!" />
    </main>
  );
}
