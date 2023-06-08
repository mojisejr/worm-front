import { useContractRead } from "wagmi";
import { contracts } from "../../contract";
import { useState } from "react";
import { BigNumber } from "ethers";

export function useReadStartTime() {
  const [start, setStart] = useState(0);

  const { refetch } = useContractRead({
    ...contracts.saleSSR,
    functionName: "startTime",
    onSuccess(data: BigNumber) {
      setStart(+data.toString());
    },
  });

  return {
    start: start,
    refetchStart: refetch,
  };
}

export function useReadPause() {
  const [pause, setPause] = useState(true);

  const { refetch } = useContractRead({
    ...contracts.saleSSR,
    functionName: "pause",
    onSuccess(data: boolean) {
      setPause(data);
    },
  });

  return {
    pause,
    refetchPause: refetch,
  };
}
