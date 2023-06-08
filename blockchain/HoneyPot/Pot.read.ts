import { useContractReads, useContractRead, useAccount } from "wagmi";
import { contracts } from "../contract";
import { BigNumber } from "ethers";
import { parsePotData } from "./utils/parsePotData";
import { useState } from "react";
import { IPotData } from "../../interfaces/iPotData";
import { parsePotMetadata } from "./utils/parsePotMetadata";
import { notify } from "../../helpers/notify";

export function useGetPotData() {
  const [a, setData] = useState<IPotData | undefined>(undefined);
  const data = useContractReads({
    contracts: [
      {
        ...contracts.pot,
        functionName: "endTime",
      },
      {
        ...contracts.pot,
        functionName: "_price",
      },
      {
        ...contracts.pot,
        functionName: "_fee",
      },
      {
        ...contracts.pot,
        functionName: "_currentTokenId",
      },
      {
        ...contracts.pot,
        functionName: "ROUND",
      },
      {
        ...contracts.pot,
        functionName: "ROUND_MINTED_COUNT",
      },
      { ...contracts.pot, functionName: "WINNER_PICKED" },
      {
        ...contracts.pot,
        functionName: "paused",
      },
    ],
    onSuccess(
      data: [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ]
    ) {
      const potData = parsePotData(data);
      setData(potData);
    },
  });

  return {
    potData: a,
    refetchPotData: data.refetch,
  };
}

export function useGetWinner(round: string) {
  const [winner, setWinner] = useState<string>("");
  useContractRead({
    ...contracts.pot,
    functionName: "getWinningOfRound",
    args: [round],
    onSuccess(data: string) {
      setWinner(data);
    },
  });

  return { winner };
}

export function useGetMetadataOf(owner: `0x${string}`) {
  const [metadata, setMetadata] = useState<
    {
      name?: string;
      description?: string;
      image?: string;
    }[]
  >([]);
  useContractRead({
    ...contracts.pot,
    functionName: "metadataOfOwner",
    args: [owner],
    onSuccess(data: string[]) {
      if (!data) return;
      const metadata = parsePotMetadata(data);
      setMetadata(metadata);
    },
  });

  return {
    metadata,
  };
}

export function useGetTokensOfOwner() {
  const [tokenIds, setTokenIds] = useState<number[]>([]);
  const { address } = useAccount();

  useContractRead({
    ...contracts.pot,
    functionName: "tokensOfOwner",
    args: [address],
    onSuccess(data: BigNumber[]) {
      const tokens = data.map((d) => +d.toString());
      setTokenIds(tokens);
    },
  });

  return {
    tokensOfOwner: tokenIds,
  };
}

export function useGetIsApprovalForAllWithGen1() {
  const { address } = useAccount();
  const [approved, setApproved] = useState<boolean>(false);

  const { refetch } = useContractRead({
    ...contracts.pot,
    functionName: "isApprovedForAll",
    args: [address, contracts.gen1.address],
    onError(error) {
      notify("Have to approve before uplevel");
    },
    onSuccess(data: boolean) {
      setApproved(data);
    },
  });

  return {
    approvedWithGen1: approved,
    reApproveWithGen1: refetch,
  };
}

export function useGetWinnerBoard() {
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [roundToToken, setRoundToToken] = useState<
    {
      round: number;
      tokenId: string;
    }[]
  >([]);
  const [roundToWinner, setRoundToWinner] = useState<
    {
      round: number;
      address: `0x${string}`;
    }[]
  >([]);

  const [images, setImages] = useState<{ round: number; image: string }[]>([]);

  let winTokenArray = [];
  let winnerWalletArray = [];

  useContractRead({
    ...contracts.pot,
    functionName: "ROUND",
    onSuccess(data: BigNumber) {
      setCurrentRound(+data.toString());
    },
  });

  for (let i = 0; i < currentRound; i++) {
    winTokenArray.push({
      address: contracts.pot.address,
      abi: contracts.pot.abi,
      functionName: "roundToWinningTokenId",
      args: [i + 1],
    });

    winnerWalletArray.push({
      address: contracts.pot.address,
      abi: contracts.pot.abi,
      functionName: "winnerOfRound",
      args: [i + 1],
    });
  }

  useContractReads({
    contracts: winTokenArray,
    onError(error) {
      console.log(error);
    },
    onSuccess(data: BigNumber[]) {
      const output = data.map((d, i) => {
        return {
          round: i + 1,
          tokenId: d.toString(),
        };
      });
      setRoundToToken(output);
    },
  });

  useContractReads({
    contracts: winnerWalletArray,
    onError(error) {
      console.log(error);
    },
    onSuccess(data: BigNumber[]) {
      const output = data.map((d, i) => {
        return {
          round: i + 1,
          address: d.toString() as `0x${string}`,
        };
      });
      setRoundToWinner(output);
    },
  });

  const imageArray = roundToToken.map((rtt) => {
    return {
      address: contracts.pot.address,
      abi: contracts.pot.abi,
      functionName: "getCardImageOf",
      args: [rtt.tokenId],
    };
  });

  useContractReads({
    contracts: imageArray,
    onSuccess(data: string[]) {
      const output = data.map((m, i) => {
        return {
          round: i + 1,
          image: m.toString(),
        };
      });
      setImages(output);
    },
  });

  return {
    winnerData: roundToToken
      .map((item, index) => {
        return { ...item, ...roundToWinner[index], ...images[index] };
      })
      .filter((m) => m.tokenId != "0"),
  };
}
