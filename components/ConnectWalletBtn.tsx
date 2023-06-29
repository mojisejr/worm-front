import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";
import { arl, kga } from "../helpers/font";

export const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    className={`bg-yellow text-purple pl-[30px] pr-[30px] pt-1 pb-1 min-w-[100px] text-[18px] tabletM:text-[2rem] rounded-full hover:shadow-[5px_5px_0px_0px_rgb(208,187,124)] transition-shadow ${kga.className}`}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </motion.button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className="bg-[#ff0330]  text-pepe_white pl-[2%] pr-[2%] pt-[1%] pb-[1%] min-w-[100px] text-[15px] rounded-[30px]
                    tabletS:text-[30px]
                    tabletS:w-[250px]
                    "
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div
                  className="text-[15px]"
                  style={{ display: "flex", gap: 12 }}
                >
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            width={12}
                            height={12}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {/* {chain.name} */}
                  </button>

                  <button
                    className={`flex gap-3 text-[1.5rem] text-yellow font-bold ${arl.className}`}
                    onClick={openAccountModal}
                    type="button"
                  >
                    <div className="font-bold tracking-[1px]">
                      {account.displayName}
                    </div>
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
