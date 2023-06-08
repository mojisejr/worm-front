import Image from "next/image";
import Menu from "./menu";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center pt-[2rem] pb-[2rem] pl-[1rem] pr-[1rem]
    tabletS:pl-[3rem]
    tabletS:pr-[3rem]
    tabletM:pl-[8rem]
    tabletM:pr-[8rem]
    tabletM:pt-[3rem]
    tabletM:pb-[3rem]
    "
    >
      <Image
        className="tabletS:w-[120px]
      labtop:w-[150px]"
        src="/images/logo.png"
        width={100}
        height={100}
        alt="logo"
      />
      <Menu />
    </div>
  );
};

export default Header;
