import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Stack } from "@mui/material"
import {
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

import DataTable from "../../../components/DataTable"
import { Supplier } from "../types/Supplier"

export default function SupplierTable() {
  const [suppliers, setSuppliers] = useLocalStorage<Supplier[]>("suppliers", [])

  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return

    navigate(`/${params.row.id}`)
  }

  const onDelete = (params: GridRenderCellParams) => {
    if (!params.row.id) return

    setSuppliers(suppliers.filter((supplier) => supplier.id !== params.row.id))
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
      minWidth: 200
    },
    {
      field: "email",
      headerName: "E-mail",
      minWidth: 200
    },
    {
      field: "cnpj",
      headerName: "CNPJ",
      width: 200
    },
    {
      field: "actions",
      headerName: "Ações",
      minWidth: 150,
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
      rows={suppliers as Supplier[]}
    />
  )
}
