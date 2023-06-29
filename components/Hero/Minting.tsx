import { arl, gum, kga } from "../../helpers/font";
import { motion } from "framer-motion";
import Image from "next/image";

const Minting = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "30px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex justify-center text-dark`}
      >
        <div className="relative min-w-[300px] bg-lightgreen rounded-3xl pl-5 pr-5 pt-8 pb-8 shadow-[5px_5px_0px_0px_rgb(208,187,124)]">
          <h1
            className={`absolute top-[-60px] left-[5%] text-[2.5rem] font-bold
        labtop:text-[3.8rem] ${arl.className} text-white`}
          >
            <span className={`${kga.className}`}>
              <span className={`text-lightgreen ${kga.className}`}>W</span>ormm
              <span className={`text-yellow ${kga.className}`}>oo</span> minting
              !
            </span>{" "}
          </h1>
          <div className="flex gap-[30px] items-center">
            <div className="relative w-[450px] h-[450px] rounded-2xl overflow-hidden">
              <Image src="/images/main2.gif" fill alt="image" />
            </div>
            <div className={`text-[2.2rem] max-w-[250px] text-purple`}>
              <div className="flex flex-col gap-5">
                <div className={`${arl.className}`}>
                  Let{"’"}s collect Extraordinary NFT!
                </div>
                <form className="flex flex-col  justify-center gap-5">
                  <input
                    className={`${arl.className} text-center focus:outline-none p-3 rounded-full focus:appearance-none w-full bg-white focus:shadow-[5px_5px_0px_0px_rgb(208,187,124)] transition-shadow`}
                    type="number"
                    placeholder="max 5/tx"
                  ></input>
                  <motion.button
                    className={`${arl.className} bg-purple text-white pl-[30px] pr-[30px] pt-1 pb-1 min-w-[100px] text-[18px] tabletM:text-[1.7rem] tabletM:font-bold rounded-full hover:shadow-[5px_5px_0px_0px_rgb(208,187,124)] transition-shadow`}
                    type="button"
                  >
                    <span className={`${kga.className}`}>
                      <span className={`text-lightgreen ${kga.className}`}>
                        W
                      </span>
                      orm
                      <span className={`text-yellow ${kga.className}`}>
                        oo
                      </span>{" "}
                      mint!
                    </span>{" "}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Minting;
