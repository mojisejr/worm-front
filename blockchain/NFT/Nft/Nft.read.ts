import { useContractRead } from "wagmi";
import { useAccount } from "wagmi";
import { contracts } from "../../contract";
import { parseNFTMetadata } from "./utils/parseNftMetadata";
import { useState } from "react";
import { BigNumber } from "ethers";

export function useGetMetadataOf() {
  const { address } = useAccount();
  const [metadata, setMetadata] = useState<
    {
      name?: string;
      description?: string;
      image?: string;
      attributes?: { trait_type: string; value: any }[];
    }[]
  >([]);

  const { refetch } = useContractRead({
    ...contracts.gen1,
    functionName: "getMetadataOf",
    args: [address],
    onSuccess(data: string[]) {
      setMetadata(parseNFTMetadata(data));
    },
  });

  return {
    metadata,
    refetchMeta: refetch,
  };
}

export function useGetNftTokensOfOwner() {
  const [tokenIds, setTokenIds] = useState<number[]>([]);
  const { address } = useAccount();

  useContractRead({
    ...contracts.gen1,
    functionName: "tokensOfOwner",
    args: [address],
    onSuccess(data: BigNumber[]) {
      const tokens = data.map((d) => +d.toString());
      setTokenIds(tokens);
    },
  });

  return {
    nftTokensOfOwner: tokenIds,
  };
}
