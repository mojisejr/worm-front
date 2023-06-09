import Image from "next/image";
import Link from "next/link";
const BuyTheWormBox = () => {
  return (
    <div
      className="relative pl-[1rem] pr-[1rem] pt-[1.5rem] pb-[1.5rem] bg-purple flex flex-col items-center justify-center rounded-xl text-yellow shadow-[5px_5px_0px_0px_rgb(117,94,161)] 
    text-[1.3rem]
    labtop:text-[2rem]
    "
    >
      <Link href="/minting" className="font-[600]">
        BUY THE WORM
      </Link>
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
