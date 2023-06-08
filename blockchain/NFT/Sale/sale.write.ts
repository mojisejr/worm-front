import { useContractWrite } from "wagmi";
import { contracts } from "../../contract";
import { notify } from "../../../helpers/notify";

export function useMint(amount: number) {
  const { write } = useContractWrite({
    ...contracts.saleSSR,
    functionName: "buy",
    args: [amount],
    mode: "recklesslyUnprepared",
    onSuccess() {
      notify("Minted !! see in your inventory after tx mined!");
    },
  });

  return {
    buy: write,
  };
}
