import "@ethersproject/shims";
import { ethers } from "ethers";
import { getChain } from "../../constants/supportedChains";
import { AsyncStorage } from "react-native";
const getChainFromID: any = async () => {
  let cid = await AsyncStorage.getItem("CHAIN_ID");
  return getChain(cid);
};

const getChainId = async () => {
  try {
    const CHAIN = await getChainFromID();
    const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
    const networkDetails = await ethersProvider.getNetwork();
    return networkDetails;
  } catch (error) {
    return error;
  }
};

const getAccounts = async (key) => {
  const CHAIN = await getChainFromID();
  try {
    const wallet = new ethers.Wallet(key);
    const address = await wallet.address;
    return address;
  } catch (error) {
    return error;
  }
};

const getBalance = async (key) => {
  const CHAIN = await getChainFromID();
  try {
    const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);
    const balance = await wallet.getBalance();

    return balance;
  } catch (error) {
    return error;
  }
};

const sendTransaction = async (key) => {
  const CHAIN = await getChainFromID();
  try {
    const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);
    const destination = "0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56";

    // Convert 1 ether to wei
    const amount = ethers.utils.parseEther("0.001");

    // Submit transaction to the blockchain
    const tx = await wallet.sendTransaction({
      to: destination,
      value: amount,
      maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
      maxFeePerGas: "6000000000000", // Max fee per gas
    });

    return tx;
  } catch (error) {
    return error;
  }
};

const signMessage = async (key) => {
  const CHAIN = await getChainFromID();
  try {
    const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);

    const originalMessage = "YOUR_MESSAGE";

    // Sign the message
    const signedMessage = await wallet.signMessage(originalMessage);

    return signedMessage;
  } catch (error) {
    return error;
  }
};

export default {
  getChainId,
  getAccounts,
  getBalance,
  sendTransaction,
  signMessage,
};
