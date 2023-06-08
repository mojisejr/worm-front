import { useContractWrite } from "wagmi";
import { contracts } from "../contract";
import { notify } from "../../helpers/notify";

export function useClaim() {
  const claimData = useContractWrite({
    ...contracts.airdrop,
    functionName: "claim",
    mode: "recklesslyUnprepared",
    onSuccess() {
      notify("Claimed !! check wallet after tx is mined.");
    },
  });

  return {
    claim: claimData.write,
    claimOK: claimData.isSuccess,
  };
}
