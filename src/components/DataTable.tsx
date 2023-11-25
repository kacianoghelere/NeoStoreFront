import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridValidRowModel
} from "@mui/x-data-grid"

interface DataTableProps extends Omit<DataGridProps, "columns" | "rows"> {
  columns: GridColDef[]
  rows: GridValidRowModel[]
}

const DataTable: React.FC<DataTableProps> = ({ columns, rows }) => (
  <div style={{ maxHeight: "100%", width: "100%" }}>
    <DataGrid
      columns={columns}
      disableRowSelectionOnClick
      loading={false}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 }
        }
      }}
      pageSizeOptions={[5, 10, 15, 25, 50]}
      rows={rows}
    />
  </div>
)

export default DataTable
