import { useContractWrite } from "wagmi";
import { contracts } from "../../contract";
import { notify } from "../../../helpers/notify";

export function useUplevel(tokenId: number, pots: number[]) {
  const { write } = useContractWrite({
    ...contracts.gen1,
    functionName: "upLevel",
    args: [pots, tokenId],
    mode: "recklesslyUnprepared",
    onSuccess() {
      notify("level up! refresh page to see how exp changed!");
    },
  });

  return {
    uplevel: write,
  };
}

export function useEvolution() {
  const { write } = useContractWrite({
    ...contracts.gen1,
    functionName: "evolution",
    mode: "recklesslyUnprepared",
    onSuccess() {
      notify("Evolution refresh page to see your NFT!!!");
    },
  });

  return {
    evolution: write,
  };
}
