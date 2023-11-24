import { Paper, Stack } from "@mui/material"

import Breadcrumbs from "../../components/Breadcrumbs"
import PageTitle from "../../components/PageTitle"
import Form from "./components/SupplierForm"

const SupplierEdit: React.FC = () => (
  <>
    <Stack sx={{ marginBottom: 2 }}>
      <PageTitle title="Editar Fornecedor" />
      <Breadcrumbs
        path={[{ label: "Fornecedores", to: "/" }, { label: "Editar" }]}
      />
    </Stack>
    <Paper>
      <Form />
    </Paper>
  </>
)

export default SupplierEdit