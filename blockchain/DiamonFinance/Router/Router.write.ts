import { useAccount, useContractWrite } from "wagmi";
import { contracts } from "../../contract";
import { ethers } from "ethers";
import { useGetAmountOut } from "./Router.read";
import { useAppSwapContext } from "../../../hooks/swapContext";

export function useSwapExacEthForTokens(amountIn: number) {
  const { setSwapLoading } = useAppSwapContext();
  const { swapData } = useGetAmountOut(amountIn);
  const deadline = new Date().getTime() + 300;
  const { address } = useAccount();
  const { write } = useContractWrite({
    ...contracts.diamon,
    functionName: "swapExactETHForTokens",
    args: [
      ethers.utils.parseEther(swapData?.ethToToken.output),
      contracts.pairs.ethToToken.addr,
      address,
      deadline,
    ],
    overrides: {
      value: ethers.utils.parseEther(swapData.ethToToken.input),
    },
    mode: "recklesslyUnprepared",
    onSuccess() {
      setSwapLoading(true);
    },
    onError(error) {
      setSwapLoading(false);
    },
  });

  return {
    swapExacEthForTokens: write,
  };
}

export function useSwapExacTokensForEth(amountIn: number) {
  const { swapData } = useGetAmountOut(amountIn);
  const deadline = new Date().getTime() + 300;
  const { address } = useAccount();
  const { write } = useContractWrite({
    ...contracts.diamon,
    functionName: "swapExactTokensForETH",
    args: [
      ethers.utils.parseEther(swapData?.tokenToEth.input),
      ethers.utils.parseEther("0"),
      contracts.pairs.tokenToEth.addr,
      address,
      deadline,
    ],
    mode: "recklesslyUnprepared",
    onSuccess() {
      console.log("Sucesss");
    },
    onError(error) {
      console.log("ERROR");
      console.log(error);
    },
  });

  return {
    swapExacTokensForEth: write,
  };
}
