import { useContractWrite } from "wagmi";
import { address, abi } from "./abi";

export const useMint = () => {
  const { write } = useContractWrite({
    address,
    abi,
    functionName: "buy",
    args: [],
    mode: "recklesslyUnprepared",
    onSuccess(data) {},
  });

  return {
    write,
  };
};
