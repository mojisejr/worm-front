import Image from "next/image";
import Menu from "./menu";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center pt-[1rem] pb-[1rem] pl-[1rem] pr-[1rem] bg-purple
    tabletS:pl-[3rem]
    tabletS:pr-[3rem]
    tabletM:pl-[8rem]
    tabletM:pr-[8rem]
    tabletM:pt-[1.5rem]
    tabletM:pb-[1.5rem]
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
