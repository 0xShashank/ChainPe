import { hookstate, useHookstate } from "@hookstate/core";
import fetchTokens from "../../utils/fetchTokens";
export const tokenState = hookstate({});

export const fetchAllTokens = async (chain: any, address: any) => {
  return new Promise((resolve, reject) => {
    fetchTokens(chain, address).then((res) => {
      resolve(res);
    });
  });
};
