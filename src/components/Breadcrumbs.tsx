import {
  Link,
  Breadcrumbs as MaterialBreadcrumbs,
  Typography,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

interface BreadcrumbProps {
  path: {
    label: string
    to?: string
  }[]
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ path }) => (
  <MaterialBreadcrumbs aria-label="breadcrumb">
    {path.map((item, index) =>
      item.to ? (
        <Link
          key={`item-${index}`}
          underline="hover"
          color="inherit"
          component={RouterLink}
          to={item.to || "#"}
        >
          {item.label}
        </Link>
      ) : (
        <Typography key={`item-${index}`} color="text.primary">
          {item.label}
        </Typography>
      )
    )}
  </MaterialBreadcrumbs>
)

export default Breadcrumbs