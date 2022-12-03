import { createListenerMiddleware } from "@reduxjs/toolkit";
import { AsyncStorage } from "react-native";
import { changeChain } from "./index";

const chainSliceMiddleware = createListenerMiddleware();

const updateChainStorage = async (chain: string) => {
  await AsyncStorage.setItem("CHAIN_ID", chain);
  console.log("CHAIN_ID", chain);
};

chainSliceMiddleware.startListening({
  actionCreator: changeChain,
  effect: async ({ payload }) => {
    await updateChainStorage(payload.chain);
  },
});

export default chainSliceMiddleware;
