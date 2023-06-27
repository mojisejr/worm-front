import { gum } from "../../helpers/font";

const LoadingBar = () => {
  return (
    <div className="relative w-full h-[40px] border-[2px] border-purple rounded-[100px]">
      <div className="w-[120px] labtop:max-w-[230px] h-full bg-purple rounded-[100px] flex justify-end items-center pr-3">
        <div className={`${gum.className} tracking-[1px]`}>20%</div>
      </div>
    </div>
  );
};

export default LoadingBar;
