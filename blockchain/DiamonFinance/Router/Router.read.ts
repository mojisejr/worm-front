import { useContractReads } from "wagmi";
import { contracts } from "../../contract";
import { BigNumber, ethers } from "ethers";
import { useState } from "react";

export function useGetAmountOut(amount: number) {
  const [swapData, setSwapData] = useState({
    ethToToken: { input: "0", output: "0" },
    tokenToEth: { input: "0", output: "0" },
  });
  let formated = ethers.utils.parseEther(amount.toString());
  const amountOutData = useContractReads({
    contracts: [
      {
        ...contracts.diamon,
        functionName: "getAmountsOut",
        args: [formated, contracts.pairs.ethToToken.addr],
      },
      {
        ...contracts.diamon,
        functionName: "getAmountsOut",
        args: [formated, contracts.pairs.tokenToEth.addr],
      },
    ],
    onSuccess(data: [[BigNumber, BigNumber], [BigNumber, BigNumber]]) {
      const format = {
        ethToToken: {
          input:
            data[0] == null
              ? "0"
              : ethers.utils.formatEther(data[0][0].toString()),
          output:
            data[0] == null
              ? "0"
              : ethers.utils.formatEther(data[0][1].toString()),
        },
        tokenToEth: {
          input:
            data[1] == null
              ? "0"
              : ethers.utils.formatEther(data[1][0].toString()),
          output:
            data[1] == null
              ? "0"
              : ethers.utils.formatEther(data[1][1].toString()),
        },
      };
      console.log(format);
      setSwapData(format);
    },
  });

  return {
    swapData,
    refetchSwapData: amountOutData.refetch,
  };
}
