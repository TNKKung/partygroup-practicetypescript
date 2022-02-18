import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";

import collections from "./collections";
import userSlice from "./userAction";

const persistedConfig = {
  state: ["userAccount,collections"],
  namespace: "app",
};

const store = configureStore({
  reducer: {
    userAccount: userSlice,
    collections: collections,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(save(persistedConfig)),
  preloadedState: load(persistedConfig),
});

export type AppState = ReturnType<typeof store.getState>;

export default store;
