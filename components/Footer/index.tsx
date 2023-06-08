import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-dark pt-[3rem] pb-[3rem] pl-[8rem] pr-[8rem]">
      <div className="tabletS:grid tabletS:grid-cols-3 flex flex-col items-center gap-[2rem]">
        <div></div>
        <div className="flex justify-center items-center">
          <Image
            className="w-[200px]"
            src="/images/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="flex flex-col items-center tabletS:items-end">
          <div className="text-[1.3rem]">FOLLOW US</div>
          <ul className="flex gap-[1.5rem] tabletS:gap-[3rem] text-[1.5rem]">
            <li>
              <RiFacebookFill />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsDiscord />
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-[2rem]"></hr>
    </div>
  );
};

export default Footer;
