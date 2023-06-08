import { useContractRead } from "wagmi";
import { contracts } from "../../contract";
import { useAccount } from "wagmi";

export function useClaimabled() {
  const { address } = useAccount();
  const { data, refetch } = useContractRead({
    ...contracts.nftdrop,
    functionName: "isClaimed",
    args: [address],
    onSuccess(data: boolean) {},
  });

  return {
    isClaimed: data,
    refetchClaimable: refetch,
  };
}
