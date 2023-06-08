import { useAccount, useContractRead } from "wagmi";
import { contracts } from "../../contract";
import { useGetPotData } from "../../HoneyPot/Pot.read";
import { useAppContext } from "../../../hooks/context";
import { BigNumber, BigNumberish, ethers } from "ethers";
import { useState } from "react";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";

export function useReadApprove() {
  const { potData } = useGetPotData();
  const { address } = useAccount();
  const { setApprove } = useAppContext();
  const approveTokenNum = BigNumber.from(100).mul(
    potData?.price.bignum! == undefined
      ? BigNumber.from(100)
      : (potData?.price.bignum as BigNumberish)
  );

  const [data, setData] = useState<boolean>(false);

  const approve = useContractRead({
    ...contracts.pepe,
    functionName: "allowance",
    args: [address, contracts.pot.address],
    onError(error) {
      setApprove(false);
    },
    onSuccess(allowance: BigNumber) {
      if (allowance.gte(approveTokenNum)) {
        setData(true);
        setApprove(true);
      } else {
        setData(false);
        setApprove(false);
      }
    },
  });

  return {
    approveRead: data,
  };
}

export function useReadApproveForSwap(swapAmount: number) {
  const { address } = useAccount();
  const swapAmountBigNum = ethers.utils.parseEther(swapAmount.toString());

  const [data, setData] = useState<boolean>(false);

  const approve = useContractRead({
    ...contracts.pepe,
    functionName: "allowance",
    args: [address, contracts.diamon.address],
    onError(error) {
      setData(false);
    },
    onSuccess(allowance: BigNumber) {
      if (
        swapAmountBigNum.toString() > "0" &&
        allowance.gte(swapAmountBigNum)
      ) {
        setData(true);
      } else {
        setData(false);
      }
    },
  });

  return {
    approveSwap: data,
    refetchSwap: approve.refetch,
  };
}

export function useReadApproveForBuy(amount: number) {
  const { address } = useAccount();
  const price = ethers.utils.parseEther("3000000000000").mul(amount.toString());

  const [data, setData] = useState<boolean>(false);

  const approve = useContractRead({
    ...contracts.pepe,
    functionName: "allowance",
    args: [address, contracts.saleSSR.address],
    onError(error) {
      setData(false);
    },
    onSuccess(allowance: BigNumber) {
      if (price.toString() > "0" && allowance.gte(price)) {
        setData(true);
      } else {
        setData(false);
      }
    },
  });

  return {
    approveBuy: data,
    refetchBuy: approve.refetch,
  };
}
