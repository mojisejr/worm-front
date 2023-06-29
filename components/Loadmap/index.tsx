import { arl, gum, kga } from "../../helpers/font";
import LoadingBar from "./loadingBar";
import PhaseBox from "./phaseBox";

const Loadmap = () => {
  return (
    <div className="w-full h-full bg-pale flex flex-col justify-center items-center gap-[2rem] pt-[2rem] pb-[2rem]">
      <div
        className={`text-dark text-[3rem] font-[600] ${gum.className} tracking-[4px]`}
      >
        <span className={`text-purple ${gum.className}`}>R</span>OAD{" "}
        <span className={`text-red ${gum.className}`}>M</span>AP
      </div>
      <div className="flex flex-col gap-[2rem]">
        <LoadingBar />
        <div
          className="flex flex-col gap-[2rem]
        tabletS:grid
        tabletS:grid-cols-2
        labtop:flex
        labtop:gap-[3rem]
        labtop:flex-row
        "
        >
          <PhaseBox>
            <div className="flex flex-col items-center gap-2 p-2">
              <div
                className={`text-yellow text-[2rem] font-[600] ${arl.className}`}
              >
                PHASE 1
              </div>
              <ul className="text-[1.2rem] list-disc">
                <li className={arl.className}>BUILD PLATFORM</li>
                <li className={arl.className}>BUILD COMMUNITY</li>
                <li className={arl.className}>PRODUCE RESEARCH</li>
                <li className={arl.className}>LAUNCH NFTs</li>
                <li className={arl.className}>WROM MOO DAO</li>
              </ul>
            </div>
          </PhaseBox>
          <PhaseBox>
            <div className="flex flex-col items-center gap-2 p-2">
              <div
                className={`text-red text-[2rem] font-[600] ${arl.className}`}
              >
                PHASE 2
              </div>
              <ul className="text-[1.2rem] list-disc">
                <li className={arl.className}>LAUNCH PLATFORM</li>
                <li className={arl.className}>LAUNCH EARN NFTs</li>
                <li className={arl.className}>EXPAND PRODUCT</li>
                <li className={arl.className}>MINI GAME</li>
              </ul>
            </div>
          </PhaseBox>
          <PhaseBox>
            <div className="flex flex-col items-center gap-2 p-2">
              <div
                className={`text-lightgreen text-[2rem] font-[600] ${arl.className}`}
              >
                PHASE 3
              </div>
              <ul className="text-[1.2rem] list-disc">
                <li className={arl.className}>STAY TUNE</li>
              </ul>
            </div>
          </PhaseBox>
          {/* <PhaseBox>
            <div className="flex flex-col items-center gap-2">
              <div className="text-purple text-[2rem] font-[600]">PHASE 1</div>
              <ul className="text-[1.2rem]">
                <li>- Lorem ipsum</li>
                <li>- Lorem ipsum</li>
              </ul>
            </div>
          </PhaseBox> */}
        </div>
      </div>
    </div>
  );
};

export default Loadmap;
