import axios from "axios"

import { Supplier } from "~/@types/models/supplier"

const api = axios.create({
  baseURL: "http://localhost:8080/NeoStore/api/"
})

const create = async (supplier: Supplier) => (
  await api.post<Supplier>("/suppliers", supplier)
)

const findById = async (id: string | number) => (
  await api.get<Supplier>(`/suppliers/${id}`)
)

const findAll = async () => await api.get<Supplier[]>("/suppliers")

const update = async (supplier: Supplier) => (
  await api.put<Supplier>(`/suppliers/${supplier.id}`, supplier)
)

const remove = async (id: string | number) => (
  await api.delete(`/suppliers/${id}`)
)

export default {
  create,
  findAll,
  findById,
  remove,
  update
}