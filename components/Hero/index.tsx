import Image from "next/image";
import BuyTheWormBox from "./BuyTheWormBox";
import { arl, kga } from "../../helpers/font";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col pr-[2rem] pl-[2rem] pt-[2rem] pb[2rem] gap-[3rem] mb-[2rem]
    tabletS:pt-[10rem]
    tabletS:pl-[3rem]
    tabletS:pr-[3rem]
    tabletM:pt-[10rem]
    tabletM:pl-[8rem]
    tabletM:pr-[8rem]
    labtop:pt-[10rem]
    labtop:pl-[10rem]
    labtop:pr-[10rem]
    labtop:pb-[10rem]
    labtop:gap-[10rem]
    "
    >
      <div
        className="
    flex items-center justify-center  flex-col gap-[1rem]
    tabletS:flex-row
    tabletS:items-start
    labtop:gap-[2rem]
    "
      >
        <div className="max-w-[700px]">
          <h1
            className={`text-[2.5rem] font-bold
        labtop:text-[3.8rem] ${arl.className} `}
          >
            Let{"’"}s collect Extraordinary{" "}
            <span className={`${kga.className}`}>
              <span className="text-lightgreen">W</span>ormm
              <span className={`text-yellow ${kga.className}`}>oo</span>
            </span>{" "}
            NFTs
          </h1>
          <p
            className="text-[1rem]
           labtop:text-[1.23rem] 
          "
          >
            Wormoo NFT Bluechip, mining investment such as, Gold mine, Iron
            mine, Rock mine, and more in which we let our holders be the voters
            and share opinion on the investment, where received profit will be
            shared to all holders.
          </p>
        </div>
        <Image
          src="/images/main2.gif"
          className="w-[300px] rounded-xl
        labtop:w-[400px]"
          width={200}
          height={200}
          alt="mainnft"
        />
      </div>
      <div
        className="grid grid-rows-2 grid-cols-1 gap-[2rem] rounded-2xl
      tabletS:grid-cols-2
      tabletS:grid-rows-1
      tabletS:pl-[0.5rem] 
      tabletS:pr-[0.5rem] 
      tabletS:pt-[1rem] 
      tabletS:pb-[1rem] 
      bg-lightgreen"
      >
        <div className="flex items-center justify-center">
          <div
            className=" font-[400] text-purple
            text-[1.5rem]
          labtop:text-[2rem]"
          >
            {/* BUY THE WORM */}
            OVER XXX WALLETS HOLDER
          </div>
        </div>
        {/* <div
          className="pr-[1rem] pl-[1rem] tabletS:text-[0.8rem]
        labtop:text-[1rem]"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. BUY THE WORM ON OPENSEA
        </div> */}
        <div className="pr-[1rem] pl-[1rem] pt-[2rem] pb-[2rem]">
          <BuyTheWormBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
