'use client'
import { Provider } from "react-redux"
import store from "./store"
import React from "react";

interface MyProviderProps {
  children: React.ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}