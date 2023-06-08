import { IPotData } from "../../../interfaces/iPotData";
import { BigNumber, ethers } from "ethers";

export function parsePotData(
  data: [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean
  ]
) {
  if (data && data.length <= 0) {
    return undefined;
  }
  const parsed: IPotData = {
    endTime: +data[0]?.toString(),
    price: {
      wei: data[1]?.toString(),
      ether: ethers.utils.formatEther(data[1] || "0"),
      bignum: data[1],
    },
    fee: {
      wei: data[2]?.toString(),
      ether: ethers.utils.formatEther(data[2] || "0"),
      bignum: data[2],
    },
    currentTokenId: data[3]?.toString(),
    currentRound: data[4]?.toString(),
    roundMintedCount: data[5]?.toString(),
    winnerPicked: data[6],
    isPaused: data[7],
  };

  return parsed;
}
