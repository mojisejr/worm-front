import Image from "next/image";
import { gum } from "../../helpers/font";

const images = [
  "/images/nft1.png",
  "/images/nft2.png",
  "/images/nft3.png",
  "/images/nft4.png",
  "/images/nft5.png",
  "/images/nft6.png",
  "/images/nft7.png",
  "/images/nft8.png",
];

const OurNFT = () => {
  return (
    <>
      <div className="relative flex justify-center">
        <Image
          className="absolute bottom-[-1px] w-[50%]"
          src={"/images/cloudy.png"}
          width={1000}
          height={1000}
          alt="dec-1"
        />
      </div>
      <div className="w-full h-full bg-[#9C66E2] flex flex-col items-center gap-[1rem] pt-[2rem] pb-[2rem]">
        <div
          className={`text-white text-[2rem] mt-2 font-[600] pt-5 pb-5
      labtop:text-[3rem] ${gum.className} tracking-[4px]`}
        >
          <span className={`text-yellow ${gum.className}`}>O</span>UR NFT
          <span className={`text-lightgreen ${gum.className}`}>S</span>
        </div>
        <div
          className="grid grid-cols-2 gap-[1rem] pb-10
      tabletS:grid-cols-4
      "
        >
          {images.map((img, index) => (
            <Image
              className="w-[100px] rounded-xl
            tabletS:w-[130px]
            tabletM:w-[150px]
            labtop:w-[180px]
            "
              key={index}
              src={img}
              width={100}
              height={100}
              alt={`${index}.png`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurNFT;
