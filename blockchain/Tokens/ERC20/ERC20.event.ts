import { useContractEvent } from "wagmi";
import { contracts } from "../../contract";
import { useAppSwapContext } from "../../../hooks/swapContext";
import { useAccount } from "wagmi";
import { notify } from "../../../helpers/notify";

export function useSwapApprovalEvent() {
  const { address } = useAccount();
  const { setApproveLoading } = useAppSwapContext();

  useContractEvent({
    ...contracts.pepe,
    eventName: "Approval",
    listener(owner, spender, value) {
      if (address == owner) {
        notify(`Approving successfull!!`);
        setApproveLoading(false);
      }
    },
  });
}

export function useTokenTransferEvent() {
  const { address } = useAccount();
  const { setSwapLoading } = useAppSwapContext();

  useContractEvent({
    ...contracts.pepe,
    eventName: "Transfer",
    listener(from, to, value) {
      if (from == address && to == contracts.lp) {
        notify(`Swapping successfully!!`);
        setSwapLoading(false);
      } else if (from == contracts.lp && to == address) {
        notify(`Swapping successfully!!`);
        setSwapLoading(false);
      }
    },
  });
}
