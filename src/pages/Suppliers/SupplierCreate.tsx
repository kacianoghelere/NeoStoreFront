import { Paper, Stack } from "@mui/material"

import Breadcrumbs from "../../components/Breadcrumbs"
import PageTitle from "../../components/PageTitle"
import Form from "./components/SupplierForm"
import React from "react"

const SupplierCreate: React.FC = () => (
  <>
    <Stack sx={{ marginBottom: 2 }}>
      <PageTitle title="Criar Novo Fornecedor" />
      <Breadcrumbs
        path={[{ label: "Fornecedores", to: "/" }, { label: "Novo" }]}
      />
    </Stack>
    <Paper>
      <Form />
    </Paper>
  </>
)

export default SupplierCreate