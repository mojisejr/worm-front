import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

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
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      boxShadow: "0px 0px 15px 5px rgba(255,195,100,0.5)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-pepe_nothing text-pepe_white pl-[30px] pr-[30px] pt-1 pb-1 min-w-[100px] text-[20px] rounded-[30px]"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect
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

                  <button onClick={openAccountModal} type="button">
                    <div>{account.displayName}</div>
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
