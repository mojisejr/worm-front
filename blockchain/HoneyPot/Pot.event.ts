import { useContractEvent } from "wagmi";
import { contracts } from "../contract";
import { useAppContext } from "../../hooks/context";
import { useGetPotData } from "./Pot.read";
import { useState } from "react";

export function useLottoMintedEvent() {
  const { setLoading } = useAppContext();
  const { refetchPotData } = useGetPotData();

  useContractEvent({
    ...contracts.pot,
    eventName: "LottoMinted",
    listener(minter, tokenId) {
      refetchPotData();
      setLoading(false);
    },
  });
}

export function useWinnnerPickedEvent() {
  const { setLoading } = useAppContext();
  const { refetchPotData } = useGetPotData();

  useContractEvent({
    ...contracts.pot,
    eventName: "WinnerPicked",
    listener(winner, tokenId) {
      console.log("Winner Picked");
      refetchPotData();
      setLoading(false);
    },
  });
}
