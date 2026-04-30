import Hero from "../components/Hero";


const Page = () => {
  return <main className="bg-[#07060f] relative text-white overflow-hidden">
    <Hero className="h-[70vh] " />
    <div className="flex px-10 justify-between">
      <div className="w-full">
        <h2 className="font-bold text-[50px] text-white unbounded leading-[113%] tracking-[-11%]">Articles that</h2>
        <h2 className="font-bold text-[50px] text-white unbounded leading-[113%] tracking-[-11%]">Inspire</h2>
      </div>
      <div>
        <p className="text-right text-white/50 jost font-light leading-[130%] tracking-[-6%] text-[25px]">Here you will find practical articles, current trends and tested strategies that help you build high-performance digital experiences and grow your trading experience.</p>
      </div>
    </div>
  </main>
};

export default Page;
