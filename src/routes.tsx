import { Route, Routes } from "react-router-dom"

import SupplierCreate from "./pages/Suppliers/SupplierCreate"
import SupplierEdit from "./pages/Suppliers/SupplierEdit"
import SupplierList from "./pages/Suppliers/SupplierList"

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route
        element={<SupplierList />}
        path="/"
      />
      <Route
        element={<SupplierCreate />}
        path="/new"
      />
      <Route
        element={<SupplierEdit />}
        path="/:id"
      />
    </Route>
  </Routes>
)

export default AppRoutes