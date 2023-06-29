import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { arl } from "../../helpers/font";

const Footer = () => {
  return (
    <div className="w-full h-full bg-dark pt-[3rem] pb-[3rem] pl-[8rem] pr-[8rem]">
      <hr className="pb-3" />
      <div className="tabletS:grid tabletS:grid-cols-3 flex flex-col items-center gap-[2rem]">
        <div
          className="flex flex-col items-center 
        tabletS:items-center
        tabletS:flex-row
        tabletS:gap-8"
        >
          <div className={`text-[1.3rem] ${arl.className}`}>
            <span className={`${arl.className} text-lightgreen`}>F</span>OLLOW U
            <span className={`${arl.className} text-yellow`}>S</span>
          </div>
          <ul className="flex gap-[1.5rem] tabletS:gap-[3rem] text-[1.5rem]">
            <li className="text-[#58afe9]">
              <RiFacebookFill />
            </li>
            <li className="text-yellow">
              <FaInstagram />
            </li>
            <li className="text-lightgreen">
              <BsTwitter />
            </li>
            <li className="text-purple">
              <BsDiscord />
            </li>
          </ul>
        </div>
        <div></div>
        <div className="flex justify-end items-center">
          <Image
            className="w-[200px]"
            src="/images/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
      </div>
      {/* <hr className="mt-[2rem]"></hr> */}
    </div>
  );
};

export default Footer;
