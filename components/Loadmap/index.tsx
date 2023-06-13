import LoadingBar from "./loadingBar";
import PhaseBox from "./phaseBox";

const Loadmap = () => {
  return (
    <div className="w-full h-full bg-pale flex flex-col justify-center items-center gap-[2rem] pt-[2rem] pb-[2rem]">
      <div className="text-dark text-[3rem] font-[600]">LOAD MAP</div>
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
            <div className="flex flex-col items-center gap-2">
              <div className="text-yellow text-[2rem] font-[600]">PHASE 1</div>
              <ul className="text-[1.2rem]">
                <li>- BUILD PLATFORMm</li>
                <li>- BUILD COMMUNITY</li>
                <li>- PRODUCE RESEARCH</li>
                <li>- LAUNCH NFTs</li>
                <li>- WROM MOO DAO</li>
              </ul>
            </div>
          </PhaseBox>
          <PhaseBox>
            <div className="flex flex-col items-center gap-2">
              <div className="text-red text-[2rem] font-[600]">PHASE 2</div>
              <ul className="text-[1.2rem]">
                <li>- LAUNCH PLATFORM</li>
                <li>- LAUNCH EARN NFTs</li>
                <li>- EXPAND PRODUCT</li>
                <li>- MINI GAME</li>
              </ul>
            </div>
          </PhaseBox>
          <PhaseBox>
            <div className="flex flex-col items-center gap-2 ">
              <div className="text-lightgreen text-[2rem] font-[600]">
                PHASE 3
              </div>
              <ul className="text-[1.2rem]">
                <li>- STAY TUNE</li>
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
