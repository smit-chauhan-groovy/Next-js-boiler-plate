"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { getStore } from "./store/store";

export default function ReduxProvider({ children }) {
  const { store, persistor } = getStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
