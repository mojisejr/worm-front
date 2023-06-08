import Image from "next/image";
const BuyTheWormBox = () => {
  return (
    <div
      className="relative p-[1rem] bg-purple flex flex-col items-center justify-center rounded-xl text-yellow 
    text-[1.3rem]
    labtop:text-[2rem]
    "
    >
      <div className="font-[600]">BUY THE WORM</div>
      <div className="font-[600]">ON OPENSEA</div>
      <Image
        className="absolute top-[-1.8rem] left-[-1.8rem]"
        src="/images/s1.png"
        width={100}
        height={100}
        alt="s1"
      />
      <Image
        className="absolute top-[-1.8rem] right-[-1.8rem] rotate-90"
        src="/images/s1.png"
        width={100}
        height={100}
        alt="s1"
      />
      <Image
        className="absolute bottom-[-1.2rem] right-[-1.8rem]"
        src="/images/s2.png"
        width={100}
        height={100}
        alt="s2"
      />
      <Image
        className="absolute bottom-[-1.8rem] left-[-1.8rem] rotate-90"
        src="/images/s2.png"
        width={100}
        height={100}
        alt="s2"
      />
    </div>
  );
};

export default BuyTheWormBox;
