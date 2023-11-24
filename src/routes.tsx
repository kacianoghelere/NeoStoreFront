import { Route, Routes } from "react-router-dom"

import SupplierCreate from "./pages/Suppliers/SupplierCreate"
import SupplierEdit from "./pages/Suppliers/SupplierEdit"
import SupplierList from "./pages/Suppliers/SupplierList"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route
          element={<SupplierList />}
          path="/suppliers"
        />
        <Route
          element={<SupplierCreate />}
          path="/suppliers/new"
        />
        <Route
          element={<SupplierEdit />}
          path="/suppliers/:id"
        />
      </Route>
    </Routes>
  )
}
