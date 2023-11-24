import * as yup from "yup"

import { Supplier } from "../types/Supplier"

export const SupplierSchema = yup
  .object<Supplier>({
    cnpj: yup
      .string()
      .required("Este campo é obrigatório")
      .transform((value) => value.replace(/[^\d]+/g, "")),
    description: yup.string(),
    email: yup
      .string()
      .email("E-mail não reconhecido")
      .required("Este campo é obrigatório"),
    name: yup.string().required("Este campo é obrigatório"),
  })
  .required()
