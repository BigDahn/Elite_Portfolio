import { ArrowRight, Mail, MapPin, PhoneCall } from "lucide-react";
import Hero from "../components/Hero";

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
      <Hero className="h-[70vh]" />
      <div className="flex px-10 justify-between bg-black">
        <div className="w-full">
          <h2 className="font-bold text-[50px] text-white unbounded leading-[113%] tracking-[-11%]">Let’s Build the</h2>
          <h2 className="font-bold text-[50px] text-white unbounded leading-[113%] tracking-[-11%]">Future Together.</h2>
        </div>
        <div>
          <p className="jost font-light leading-[120%] tracking-[-4%] text-2xl">Partner, collaborate, or engage to drive meaningful impact and create lasting value across sectors and communities.</p>
        </div>
      </div>
      <section className="relative mx-auto flex w-full bg-black max-w-7xl flex-col gap-14 px-6 pb-20 pt-36 md:px-0 lg:gap-16 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-end">
          <div className="relative space-y-8 border-l-2 border-[#CC9933] h-full" style={{
            background: "url(/star.jpg)",
            backgroundPosition: "center center"
          }}>
            <div className="bg-black h-full opacity-85 inset-0 absolute" />
            <div className=" h-full z-40 relative flex justify-center space-y-5 flex-col pl-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-x-3"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F8A308] text-white transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="space-y-1">
                      <span className="block text-[25px] capitalize tracking-[-8%] leading-[115.5%] text-white jakarta">
                        {item.label}
                      </span>
                      <span className="block text-[15px] leading-[73%] tracking-[-4%] text-white/40 jakarta">
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
            className=" p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-0"
          >
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="h-12 w-full rounded-none placeholder-jost border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#F8A308]/70 focus:ring-2 focus:ring-[#F8A308]/20"
              />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-none border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#F8A308]/70 focus:ring-2 focus:ring-[#F8A308]/20"
              />
              <label className="space-y-2 block">
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your message"
                  className="w-full rounded-none border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#F8A308]/70 focus:ring-2 focus:ring-[#F8A308]/20"
                />
              </label>
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
    </main>
  );
}
