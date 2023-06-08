import { useContractEvent } from "wagmi";
import { contracts } from "../../contract";
import { useAccount } from "wagmi";
import { notify } from "../../../helpers/notify";

export function useClaimedEvent() {
  const { address } = useAccount();
  useContractEvent({
    ...contracts.nftdrop,
    eventName: "Claimed",
    listener(tokenId, owner) {
      if (owner == address) {
        notify("Done! NFT claimed!");
      }
    },
  });
}
