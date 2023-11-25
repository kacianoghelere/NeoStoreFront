import * as ReactRedux from "react-redux"

import { AppDispatch } from "~/store"

const useDispatch = ReactRedux.useDispatch<AppDispatch>

export default useDispatch