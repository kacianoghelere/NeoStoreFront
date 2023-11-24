import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import { Box, Button, Paper, Stack } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

import Breadcrumbs from "../../components/Breadcrumbs"
import PageTitle from "../../components/PageTitle"
import Grid from "./components/SupplierTable"

const SupplierList: React.FC = () => (
  <>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      gap={1}
      mb={2}
    >
      <Box sx={{ flexGrow: 1 }}>
        <PageTitle title="Lista" />
        <Breadcrumbs
          path={[{ label: "Fornecedores", to: "/suppliers" }, { label: "Lista" }]}
        />
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Button
          component={RouterLink}
          startIcon={<PersonAddAltIcon />}
          to="/suppliers/new"
          variant="contained"
        >
          Novo Fornecedor
        </Button>
      </Box>
    </Stack>
    <Paper>
      <Grid />
    </Paper>
  </>
)

export default SupplierList