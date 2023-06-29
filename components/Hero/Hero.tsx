import BuyTheWormBox from "./BuyTheWormBox";
import Image from "next/image";
import { arl, kga } from "../../helpers/font";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "30px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
              <span className={`text-lightgreen ${kga.className}`}>W</span>ormm
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
      </motion.div>
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
    </>
  );
};

export default HeroContent;
