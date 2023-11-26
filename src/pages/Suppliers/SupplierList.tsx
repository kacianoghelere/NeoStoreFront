import UploadFileIcon from "@mui/icons-material/UploadFile"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import { Box, Button, Paper, Stack } from "@mui/material"
import { styled } from '@mui/material/styles'
import { ChangeEvent } from 'react'
import { Link as RouterLink } from "react-router-dom"

import { AsyncActions } from '~/store/modules/suppliers/suppliers-list'
import { useDispatch } from '~/utils/hooks'
import Breadcrumbs from "~/components/Breadcrumbs"
import PageTitle from "~/components/PageTitle"
import SupplierTable from "./components/SupplierTable"

const VisuallyHiddenInput = styled('input')({
  bottom: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1
})

const SupplierList: React.FC = () => {
  const dispatch = useDispatch()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Reading import file...")

    if (e.target.files) {
      var reader = new FileReader();
      reader.onload = (event) => {
        if (!!event.target?.result) {
          console.log(event.target.result)

          dispatch(AsyncActions.importSuppliers(
            JSON.parse(event.target.result.toString())
          ))
        }
      }
      reader.readAsText(e.target.files[0])
    }
  }

  return (
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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={1}
          mb={2}
        >
          <Button
            component={RouterLink}
            startIcon={<PersonAddAltIcon />}
            to="/new"
            variant="contained"
          >
            Novo Fornecedor
          </Button>
          <Button
            component="label"
            startIcon={<UploadFileIcon />}
            variant="contained"
          >
            Importar Fornecedores
            <VisuallyHiddenInput
              accept=".json"
              onChange={handleFileChange}
              type="file"
            />
          </Button>
        </Stack>
      </Stack>
      <Paper>
        <SupplierTable />
      </Paper>
    </>
  )
}

export default SupplierList