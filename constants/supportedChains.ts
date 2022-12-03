export const supportedChains = {
  ETH: {
    chainId: 1,
    chainName: "Ethereum Mainnet",
    providerUrl: "https://rpc.ankr.com/eth",
    contract: "0x74Ba11c7a2D266b8e61AD65073D29C9eF8996b5b",
  },
  FUSE_SPARK: {
    chainId: 123,
    chainName: "Fuse Testnet",
    providerUrl: "https://rpc.fusespark.io",
    contract: "0x8498d0962454C22406f41BFc9665724E5f527a93",
  },
  BSC_TEST: {
    providerUrl: "https://data-seed-prebsc-1-s3.binance.org:8545",
    chainId: 97,
    chainName: "Binance Testnet",
    contract: "0x74Ba11c7a2D266b8e61AD65073D29C9eF8996b5b",
  },
  POLYGON: {
    providerUrl: "https://rpc-mainnet.maticvigil.com",
    chainId: 137,
    chainName: "Polygon Mainnet",
    contract: "",
  },
};
export const getChain = (chainId) => {
  return supportedChains[chainId];
};
