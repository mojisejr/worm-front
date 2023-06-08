import { useContractWrite } from "wagmi";
import { contracts } from "../../contract";
import { notify } from "../../../helpers/notify";

export function useNFTClaim() {
  const { write } = useContractWrite({
    ...contracts.nftdrop,
    functionName: "claim",
    mode: "recklesslyUnprepared",
    onSuccess() {
      notify("Claiming!");
    },
  });
  return {
    claim: write,
  };
}
