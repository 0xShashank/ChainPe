import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supportedChains } from "../../constants/supportedChains";

const INIT_STATE = {
  chain: "ETH",
};

const chainSlice = createSlice({
  name: "CHAIN_STATE",
  initialState: INIT_STATE,
  reducers: {
    changeChain: (state, { payload }) => {
      state.chain = payload.chain;
    },
  },
});

export const useChainState = (state) => state.chainState;

export const { changeChain } = chainSlice.actions;

export default chainSlice.reducer;
