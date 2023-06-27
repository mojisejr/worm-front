import { ConnectWalletButton } from "../ConnectWalletBtn";
const SmallScreenMenuContent = () => {
  return (
    <ul className="w-[200px] flex flex-col gap-2">
      <li className="font-[600]">Menu</li>
      <hr className="pb-2"></hr>
      <li>
        <ConnectWalletButton />
      </li>
    </ul>
  );
};

export default SmallScreenMenuContent;
