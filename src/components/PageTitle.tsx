import { Typography } from "@mui/material"

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <Typography
    color="text.primary"
    variant="h5"
  >
    {title}
  </Typography>
)

export default PageTitle