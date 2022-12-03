import { configureStore } from "@reduxjs/toolkit";
import { injectStore } from "../utils/storeInteract";
import chainReducer from "./chainSlice";
import chainSliceMiddleware from "./chainSlice/middleware";
export const store = configureStore({
  reducer: {
    chainState: chainReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(chainSliceMiddleware.middleware),
});

injectStore(store);
