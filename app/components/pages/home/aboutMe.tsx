import Headings from "../../headings";
import Link from "next/link"
import SectionContainer from "../../SectionContainer";
import { Check, Send } from "lucide-react";
import TypewriterText from "../../Typewriter";
import { World } from "@/components/ui/globe";

const AboutMe = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: "#808080",
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: "#808080",
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: "#808080",
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: "#808080",
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: "#808080",
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: "#808080",
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: "#808080",
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: "#808080",
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: "#808080",
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: "#808080",
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: "#808080",
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: "#808080",
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: "#808080",
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: "#808080",
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: "#808080",
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: "#808080",
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: "#808080",
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: "#808080",
    },
  ];

  return (
    <SectionContainer id="aboutMe" className="bg-black">
      <div className=" py-6 md:py-20 px-10">
        <div className="md:h-19">
          <Headings text="About Me" textClassName="text-[#D9D9D9]" />
          <div className="border-b-2 border-gray-200/10 h-15  w-[96%] m-auto " />
        </div>
        <section className="flex flex-col justify-center w-full m-auto py-4  ">
          <div className=" flex flex-col md:grid  md:grid-cols-[613px_1fr] items-center  w-full justify-center h-[900px] md:h-[720px] ">
            <World data={sampleArcs} globeConfig={globeConfig} />
            <div className="order-first md:order-last">
              <h3 className="unbounded uppercase text-[30px] md:text-[50px] font-bold leading-[113%] tracking-[-11%] text-white">
                Who is <span className="text-[#F8A308]">Elite ayomide?</span>
              </h3>
              <div className="h-17.5">
                <h3
                  className={`unbounded text-[30px] md:text-[50px] font-bold leading-[107%] tracking-[-8%] text-white `}
                >
                  A <TypewriterText />
                </h3>
              </div>
              <p className="jost text-[16px] md:text-[25px] leading-[120%] tracking-[-4%] text-gray-500  max-w-200 relative">
                A Crypto Trader with 6 years of experience, helping traders and
                investors navigate the trading space profitably with information
                and education.
              </p>

              <div className="grid md:grid-cols-2 py-[2em] text-[10px] md:text-[16px] gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[18px] md:h-[27px] flex items-center w-[18px] md:w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4 className="jost text-[20px] md:text-[25px] leading-[120%] tracking-[4%] text-gray-500">
                    Trader + Content Creator
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[18px] md:h-[27px] flex items-center w-[18px] md:w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[20px] md:text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Growth Strategist
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308]  h-[18px] md:h-[27px] flex items-center w-[18px] md:w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[20px] md:text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Community Manager
                  </h4>
                  75
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[18px] md:h-[27px] flex items-center w-[18px] md:w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[20px] md:text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Technical Analyst
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[18px] md:h-[27px] flex items-center w-[18px] md:w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[20px] md:text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Market Analysis
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[18px] md:h-[27px] flex items-center w-[18px] md:w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[20px] md:text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Trading Mentor
                  </h4>
                </div>
              </div>

              <Link href="/about-me" className="jost bg-white rounded-full py-[1.3em] flex items-center justify-center px-[2.8em] font-semibold flex items-center gap-3 mt-4 w-full md:max-w-[250px]">
                <Send
                  fill="black"
                  strokeWidth={1}
                  size={16}
                  className="rotate-[280deg]"
                />{" "}
                <h3>More About Me</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
