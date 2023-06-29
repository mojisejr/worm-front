import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div
      className="min-h-screen w-full flex flex-col pr-[2rem] pl-[2rem] pt-[2rem] pb-[2rem] gap-[3rem] mb-[2rem]
    tabletS:pt-[10rem]
    tabletS:pl-[3rem]
    tabletS:pr-[3rem]
    tabletM:pt-[10rem]
    tabletM:pl-[8rem]
    tabletM:pr-[8rem]
    labtop:pt-[10rem]
    labtop:pl-[10rem]
    labtop:pr-[10rem]
    labtop:pb-[10rem]
    labtop:gap-[10rem]
    "
    >
      {children}
    </div>
  );
};

export default Hero;
