import Image from "next/image";
import BuyTheWormBox from "./BuyTheWormBox";

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
            className="text-[2.5rem] font-bold
        labtop:text-[3.8rem]"
          >
            Let{"’"}s collect Extraordinary{" "}
            <span className="text-lightgreen">W</span>ormm
            <span className="text-yellow">oo</span> NFTs
          </h1>
          <p
            className="text-[1rem]
           labtop:text-[1.23rem] 
          "
          >
            วอร์มมู NFT BULE CHIP การลงทุนด้านเหมือง อาทิ เหมืองแร่ เหมืองหิน
            เหมืองเหล็ก และเหมืองทองคํา โดยทางเราจะเลือกมา แล้วให้ HOLDERS
            ของเรา เป็นคนช่วย Votes หรือ ออกความ เห็น ในการลงทุน
            และนําผลกําไรท่ีได้มาแบ่งให้กับ HOLDERS ทุกท่าน
          </p>
        </div>
        <Image
          src="/images/mainnft.png"
          className="w-[300px]
        labtop:w-[600px]"
          width={200}
          height={200}
          alt="mainnft"
        />
      </div>
      <div
        className="grid grid-rows-2 grid-cols-1 gap-[2rem] 
      tabletS:grid-cols-2
      tabletS:grid-rows-1
      tabletS:pl-[1rem] 
      tabletS:pr-[1rem] 
      tabletS:pt-[2rem] 
      tabletS:pb-[2rem] 
      bg-lightgreen"
      >
        <div className="flex items-center justify-center">
          <div
            className="font-bold text-purple
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
