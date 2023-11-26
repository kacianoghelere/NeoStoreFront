import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Stack } from "@mui/material"
import {
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"

import { Supplier } from "~/@types/models/supplier"
import { AsyncActions } from "~/store/modules/suppliers/suppliers-list"
import { useDispatch, useSelector } from "~/utils/hooks"
import DataTable from "~/components/DataTable"

export default function SupplierTable() {
  const suppliersList = useSelector((state) => state.suppliers.list)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return

    navigate(`/${params.row.id}`)
  }

  const onDelete = (params: GridRenderCellParams) => {
    dispatch(AsyncActions.deleteSupplier(params.row.id))
  }

  const columns: GridColDef<Supplier>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 70
    },
    {
      field: "name",
      headerName: "Nome",
      minWidth: 250
    },
    {
      field: "description",
      headerName: "Descrição",
      minWidth: 250
    },
    {
      field: "email",
      headerName: "E-mail",
      minWidth: 250
    },
    {
      field: "cnpj",
      headerName: "CNPJ",
      width: 200
    },
    {
      field: "actions",
      headerName: "Ações",
      minWidth: 100,
      sortable: false,
      renderCell: (params) => (
        <Stack
          direction="row"
          spacing={2}
        >
          <IconButton
            color="info"
            onClick={() => onEdit(params)}
            size="small"
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => onDelete(params)}
            size="small"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ]

  return (
    <DataTable
      columns={columns}
      loading={suppliersList.isLoading}
      rows={suppliersList.data || []}
    />
  )
}
