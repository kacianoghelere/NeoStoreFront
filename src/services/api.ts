import axios from "axios"
import { Supplier } from '../pages/Suppliers/types/Supplier'

const api = axios.create({
  baseURL: 'http://localhost:8080/NeoStore/api/'
})

export async function createSupplier(supplier: Supplier): Promise<
  | Supplier
  | undefined
> {
  try {
    const { data } = await api.post<Supplier>('/suppliers', {
      data: supplier
    })

    return data
  } catch (error) {
    console.error(error)

    return undefined
  }
}

export async function updateSupplier(supplier: Supplier): Promise<
  | Supplier
  | undefined
> {
  try {
    const { data } = await api.put<Supplier>(`/suppliers/${supplier.id}`, {
      data: supplier
    })

    return data
  } catch (error) {
    console.error(error)

    return undefined
  }
}

export async function deleteSupplier(supplier: Supplier): Promise<
  | Supplier
  | undefined
> {
  try {
    return await api.delete(`/suppliers/${supplier.id}`)
  } catch (error) {
    console.error(error)

    return undefined
  }
}
