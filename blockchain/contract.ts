import { abiDaimonRouter } from "./DiamonFinance/Router/Router.abi";
import { abiDaimonFactory } from "./DiamonFinance/Factory/Factory.abi";
import { abiHoneyPot } from "./HoneyPot/Pot.abi";
import { abiERC20 } from "./Tokens/ERC20/ERC20.abi";
import { abiAridrop } from "./Airdrop/Airdrop.abi";
import { abiNftdrop } from "./NFT/Airdrop/Nftdrop.abi";
import { abiNft } from "./NFT/Nft/Nft.abi";
import { abiNftSale } from "./NFT/Sale/sale.abi";

const address = {
  // diamonRounter: "0xbD84F72a48a3B8412e0954e03BbDC218Dd194740",
  // daimonFactory: "0x6E906Dc4749642a456907deCB323A0065dC6F26E",
  // pot: "0x7aAFC8bECA9Ed0c4Fe68a41ad62064A46A2E77A4",
  // pepe: "0xB55d9A6062767E30bEce52ba5267646DfE39A8aE",
  // weth: "",
  diamonRounter: "0xAb30a29168D792c5e6a54E4bcF1Aec926a3b20FA",
  daimonFactory: "0x6E906Dc4749642a456907deCB323A0065dC6F26E",
  pot: "0xAad0e0b3B76fB59B97d61abC2c6F002cc158b601",
  pepe: "0x54e087D69C2917460E4c2CcedEE5fc2a6Df28239",
  weth: "0x67ebd850304c70d983b2d1b93ea79c7cd6c3f6b5",
  lp: "0xe713f7b70261c58cd0adf3129bba1f5d80f35ce8",
  airdrop: "0x23886109fD91D46A7d9f8c4ac72f28f1fee004A1",
  nftdrop: "0xa48Be9Bb236EB614252D439A19E3634BB938981C",
  gen1: "0xb5AFA38ce66b55dA0DC5A0711D0AcA1B00Ced87e",
  saleSSR: "0xF40e244e4222A20c29FcDa5cD79B8EE67e8F1814",
};

export const contracts = {
  diamon: {
    abi: abiDaimonRouter,
    address: address.diamonRounter as `0x${string}`,
  },
  factory: {
    abi: abiDaimonFactory,
    address: address.daimonFactory as `0x${string}`,
  },
  pot: {
    abi: abiHoneyPot,
    address: address.pot as `0x${string}`,
  },
  pepe: {
    abi: abiERC20,
    address: address.pepe as `0x${string}`,
  },
  airdrop: {
    abi: abiAridrop,
    address: address.airdrop as `0x${string}`,
  },
  nftdrop: {
    abi: abiNftdrop,
    address: address.nftdrop as `0x${string}`,
  },
  gen1: {
    abi: abiNft,
    address: address.gen1 as `0x${string}`,
  },
  saleSSR: {
    abi: abiNftSale,
    address: address.saleSSR as `0x${string}`,
  },
  pairs: {
    ethToToken: {
      addr: [address.weth, address.pepe],
      token0Img: "/images/bitkub.png",
      token1Img: "/images/coin.png",
    },
    tokenToEth: {
      addr: [address.pepe, address.weth],
      token0Img: "/images/bitkub.png",
      token1Img: "/images/coin.png",
    },
  },
  lp: address.lp,
};

// ["0xe27e65bf9bdc148c6248b495386571fd49410f27","0xB55d9A6062767E30bEce52ba5267646DfE39A8aE"]
// [0xe27e65bf9bdc148c6248b495386571fd49410f27,0xB55d9A6062767E30bEce52ba5267646DfE39A8aE]

// [0x67ebd850304c70d983b2d1b93ea79c7cd6c3f6b5,0xdbeaa777a5ccab24baa9220257d27d59b4336603]
