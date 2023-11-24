import { Typography } from "@mui/material"

interface FormTitleProps {
  title: string
}

const FormTitle: React.FC<FormTitleProps> = ({ title })  => (
  <Typography
    color="text.primary"
    sx={{ marginBottom: 2 }}
    variant="h6"
  >
    {title}
  </Typography>
)

export default FormTitle