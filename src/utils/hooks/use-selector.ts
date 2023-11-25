import * as ReactRedux from "react-redux"

import { RootState } from "~/store"

const useSelector: ReactRedux.TypedUseSelectorHook<RootState> = ReactRedux.useSelector

export default useSelector