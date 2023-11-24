import { yupResolver } from "@hookform/resolvers/yup"
import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField
} from "@mui/material"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

import { SupplierSchema } from "../schemas/SupplierSchema"
import { Supplier } from "../types/Supplier"

export default function SupplierForm() {
  const [suppliers, setSuppliers] = useLocalStorage<Supplier[]>("suppliers", [])

  const { id } = useParams()

  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Supplier>({
    resolver: yupResolver(SupplierSchema),
  })

  useEffect(() => {
    if (!id) return

    const supplier = suppliers.find((supplier) => `${supplier.id}` === id)

    if (!supplier) return

    setValue("name", supplier.name)
    setValue("cnpj", supplier.cnpj)
    setValue("email", supplier.email)
    setValue("description", supplier.description)
  }, [id, setValue, suppliers])

  const onSubmit = (data: Supplier) => {
    console.log(data)
    if (!id) {
      setSuppliers([...suppliers, { ...data, id: suppliers.length + 1 }])
    } else {
      const supplierIndex = suppliers.findIndex((supplier) => `${supplier.id}` === id)

      const newSuppliers = [...suppliers]
      newSuppliers[supplierIndex] = { ...data, id: +id }

      setSuppliers(newSuppliers)
    }

    navigate("/suppliers/")
  }

  return (
    <Box
      autoComplete="off"
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: 2 }}
    >
      <TextField
        autoFocus
        error={!!errors.name}
        fullWidth={true}
        helperText={errors.name?.message}
        label="Nome"
        sx={{ marginBottom: 2 }}
        {...register("name")}
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ marginBottom: 2 }}
      >
        <Controller
          control={control}
          defaultValue=""
          name="cnpj"
          render={({ field: { ...field } }) => (
            <FormControl fullWidth={true}>
              <InputMask
                mask="99.999.999/9999-99"
                {...field}
              >
                <TextField
                  label="CNPJ"
                  fullWidth={true}
                  error={!!errors.cnpj}
                  helperText={errors.cnpj?.message}
                />
              </InputMask>
            </FormControl>
          )}
        />
        <TextField
          error={!!errors.email}
          fullWidth={true}
          helperText={errors.email?.message}
          label="E-mail"
          {...register("email")}
        />
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ marginBottom: 2 }}
      >
        <TextField
          error={!!errors.description}
          fullWidth={true}
          helperText={errors.description?.message}
          label="Description"
          {...register("description")}
        />
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
      >
        <Button
          size="large"
          type="submit"
          variant="contained"
        >
          Criar Fornecedor
        </Button>
        <Button
          component={RouterLink}
          to="/suppliers"
        >
          Cancelar
        </Button>
      </Stack>
    </Box>
  )
}
