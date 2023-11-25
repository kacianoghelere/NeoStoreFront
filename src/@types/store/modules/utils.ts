import { SerializedError } from "@reduxjs/toolkit"

export interface ModuleState<TData> {
  data?: TData
  error?: SerializedError
  isLoading: boolean
}