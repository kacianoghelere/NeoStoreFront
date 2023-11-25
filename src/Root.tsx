import { useEffect } from "react"

import { AsyncActions } from "~/store/modules/suppliers/suppliers-list"
import { useDispatch } from "~/utils/hooks"
import AppRoutes from "./routes"

const Root: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AsyncActions.fetchSuppliers())
  }, [])

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default Root
