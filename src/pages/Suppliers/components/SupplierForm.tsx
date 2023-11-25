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

import { Supplier } from "~/@types/models/supplier"
import { AsyncActions } from "~/store/modules/suppliers/suppliers-list"
import { useDispatch, useSelector } from '~/utils/hooks'
import { SupplierSchema } from "../schemas/SupplierSchema"

export default function SupplierForm() {
  const { id } = useParams()

  const supplier = useSelector(({ suppliers }) => (
    suppliers.list.data!.find(({ id: supplierId }) => `${supplierId}` === id)
  ))

  const dispatch = useDispatch()

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

    if (!supplier) return

    setValue("name", supplier.name)
    setValue("cnpj", supplier.cnpj)
    setValue("email", supplier.email)
    setValue("description", supplier.description)
  }, [id, setValue, supplier])

  const onSubmit = (data: Supplier) => {
    if (!id) {
      dispatch(AsyncActions.createSupplier(data))
    } else {
      dispatch(AsyncActions.updateSupplier({
        ...data,
        id: +id
      }))
    }

    navigate("/")
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
          Salvar
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
