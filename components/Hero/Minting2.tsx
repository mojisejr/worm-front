import { arl, gum, kga } from "../../helpers/font";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Minting2 = () => {
  const maxMintPerTx = 10;
  const { isConnected } = useAccount();
  const { replace } = useRouter();
  const [amount, setAmount] = useState<number>(1);

  const handleIncrease = () => {
    if (amount < maxMintPerTx) {
      setAmount(amount + 1);
    }
  };
  const handleDecrease = () => {
    if (amount <= 1) {
      setAmount(1);
    } else {
      setAmount(amount - 1);
    }
  };

  useEffect(() => {
    if (!isConnected) {
      replace("/");
    }
  }, [isConnected]);

  return (
    <>
      {isConnected ? (
        <motion.div
          initial={{ opacity: 0, y: "30px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex pl-[5rem] pr-[5rem] justify-evenly`}
        >
          <div className="flex flex-col justify-center">
            <div>
              <div className="relative w-[325px] h-[325px] rounded-2xl overflow-hidden">
                <Image src="/images/main2.gif" fill alt="image" />
              </div>
              <div
                className={`${arl.className} grid grid-cols-2 pt-3 gap-2 text-xl tracking-[1px]`}
              >
                <div className={`text-yellow`}>Remaining</div>
                <div className="text-right">111/1111</div>
                <div className={`text-yellow`}>Price</div>
                <div className="text-right">1 KUB</div>
              </div>
            </div>
          </div>
          <div
            className={`text-[3rem] text-lightgreen ${arl.className} flex flex-col justify-between`}
          >
            <div className="relative">
              <div>PUBLIC SALE </div>
              <Image
                className="absolute top-[-0.7rem] left-[-1.5rem]"
                src={"/images/s1.png"}
                width={60}
                height={60}
                alt="spk-1"
              />
              <Image
                className="absolute top-0 right-[-1rem]"
                src={"/images/s2.png"}
                width={50}
                height={50}
                alt="spk-1"
              />
            </div>
            <div>
              <div className={`flex justify-between items-center`}>
                <motion.button
                  whileTap={{
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.1 }}
                  onClick={handleIncrease}
                  className=" text-purple bg-lightgreen w-[50px] h-[50px] flex items-center justify-center rounded-xl"
                >
                  <div>+</div>
                </motion.button>
                <div>{amount}</div>
                <motion.button
                  whileTap={{
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.1 }}
                  onClick={handleDecrease}
                  className=" text-purple bg-lightgreen w-[50px] h-[50px] flex items-center justify-center rounded-xl"
                >
                  -
                </motion.button>
              </div>
              <div className="text-[0.9rem] text-white text-center pt-5">
                Max Mint Amount: 10
              </div>
            </div>
            <div className="flex gap-1 justify-between text-[1.5rem]">
              <div className="text-yellow">Total</div>
              <div className="text-yellow">1 KUB</div>
              <div>+ GAS</div>
            </div>
            <motion.button
              whileTap={{
                scale: 1.2,
              }}
              transition={{ duration: 0.1 }}
              className=" flex w-full bg-lightgreen text-purple rounded-xl justify-center p-1"
            >
              MINT
            </motion.button>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Minting2;
