import { Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import SupplierCreate from "./pages/Suppliers/SupplierCreate"
import SupplierEdit from "./pages/Suppliers/SupplierEdit"
import SupplierList from "./pages/Suppliers/SupplierList"

// import NotFound from "./pages/NotFound"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/suppliers">
        <Route path="/suppliers" element={<SupplierList />} />
        <Route path="/suppliers/new" element={<SupplierCreate />} />
        <Route path="/suppliers/:id" element={<SupplierEdit />} />
      </Route>
    </Routes>
  )
}
