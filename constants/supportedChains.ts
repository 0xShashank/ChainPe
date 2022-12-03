export const supportedChains = {
  ETH: {
    chainId: 1,
    chainName: "Ethereum Mainnet",
    providerUrl:
      "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  },
};
export const getChain = (chainId) => {
  return supportedChains[chainId];
};
