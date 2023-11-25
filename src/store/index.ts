import { configureStore } from "@reduxjs/toolkit"

import modules from "./modules"

export const store = configureStore({
  devTools: true,
  reducer: modules
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch