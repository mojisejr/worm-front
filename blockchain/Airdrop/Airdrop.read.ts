import { useContractReads } from "wagmi";
import { contracts } from "../contract";
import { useState } from "react";
import { BigNumber } from "ethers";

export function useReadAirdropData() {
  const [data, setData] = useState({
    // claimed: false,
    // claimable: "0",
    balance: "0",
    totalClaimed: "0",
    totalClaimedUser: "0",
    paused: false,
    start: 0,
  });
  const airdropData = useContractReads({
    contracts: [
      {
        ...contracts.airdrop,
        functionName: "checkBalance",
      },
      {
        ...contracts.airdrop,
        functionName: "claimedAmounts",
      },
      {
        ...contracts.airdrop,
        functionName: "claimingCounter",
      },
      {
        ...contracts.airdrop,
        functionName: "paused",
      },
      {
        ...contracts.airdrop,
        functionName: "start",
      },
    ],

    onSuccess(
      data: [
        // boolean,
        // BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber
      ]
    ) {
      if (data[0] == null) return;
      setData({
        // claimed: data[0],
        // claimable: data[1].toString(),
        balance: data[0].toString(),
        totalClaimed: data[1].toString(),
        totalClaimedUser: data[2].toString(),
        paused: data[3],
        start: +data[4].toString(),
      });
    },
  });

  return {
    airdropData: data,
    refetchAridrop: airdropData.refetch,
  };
}

export function useAirdropUser(user: `0x${string}`) {
  const [data, setData] = useState(false);
  const userData = useContractReads({
    contracts: [
      {
        ...contracts.airdrop,
        functionName: "claimed",
        args: [user],
      },
      {
        ...contracts.airdrop,
        functionName: "claimableAmounts",
        args: [user],
      },
    ],
    onSuccess(data: [boolean, BigNumber]) {
      if (data[0] == null) return;
      if (BigNumber.from(data[1]).gt(0) && data[0] == false) {
        setData(true);
      } else {
        setData(false);
      }
    },
  });

  return {
    claimable: data,
    refetchUserAirdrop: userData.refetch,
  };
}
