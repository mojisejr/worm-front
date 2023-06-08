import Image from "next/image";

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
    <div className="w-full h-full bg-purple flex flex-col items-center gap-[1rem] pt-[2rem] pb-[2rem]">
      <div
        className="text-white text-[2rem] mt-2 font-[600]
      labtop:text-[3rem]
      "
      >
        OUR NFTS
      </div>
      <div
        className="grid grid-cols-2 gap-[1rem]
      tabletS:grid-cols-4
      "
      >
        {images.map((img, index) => (
          <Image
            className="w-[100px]
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
  );
};

export default OurNFT;
