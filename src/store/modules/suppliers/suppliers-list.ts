import {
  SerializedError,
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit"
import Swal from 'sweetalert2'

import { Supplier } from "~/@types/models/supplier"
import { SuppliersListState } from "~/@types/store/modules/supplier"
import SupplierService from "~/utils/services/supplier-service"

const initialState: SuppliersListState = {
  data: [],
  error: undefined,
  isLoading: false
}

const moduleName = "suppliers"

const createSupplier = createAsyncThunk<Supplier, Supplier>(
  `${moduleName}/create`,
  async (supplier, thunkApi) => {
    const { data } = await SupplierService.create(supplier)

    thunkApi.dispatch(fetchSuppliers())

    return data
  }
)

const deleteSupplier = createAsyncThunk<any, string | number>(
  `${moduleName}/delete`,
  async (id, thunkApi) => {
    const response = await SupplierService.remove(id)

    thunkApi.dispatch(fetchSuppliers())

    return response
  }
)

const fetchSuppliers = createAsyncThunk<Supplier[]>(
  `${moduleName}/fetch`,
  async () => {
    const { data } = await SupplierService.findAll()

    return data
  }
)

const importSuppliers = createAsyncThunk<Supplier[] | undefined, {}>(
  `${moduleName}/import`,
  async (batchData, thunkApi) => {
    try {
      const { data } = await SupplierService.batchCreate(batchData)

      thunkApi.dispatch(fetchSuppliers())

      Swal.fire({
        title: 'Tudo pronto!',
        text: 'A importação de fornecedores foi concluída com sucesso',
        icon: 'success',
        confirmButtonText: 'Ok'
      })

      return data
    } catch (error) {
      Swal.fire({
        title: 'Falha na importação',
        text: 'Não foi possível importar os fornecedores, verifique seu arquivo.',
        icon: 'error',
        confirmButtonText: 'Ok'
      })

      return undefined
    }
  }
)

const updateSupplier = createAsyncThunk<Supplier, Supplier>(
  `${moduleName}/update`,
  async (supplier, thunkApi) => {
    const { data } = await SupplierService.update(supplier)

    thunkApi.dispatch(fetchSuppliers())

    return data
  }
)

export const AsyncActions = {
  createSupplier,
  deleteSupplier,
  fetchSuppliers,
  importSuppliers,
  updateSupplier
}

const suppliersSlice = createSlice({
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createSupplier.fulfilled, (state, action) => {
        state.data?.push(action.payload);
      })
      .addCase(fetchSuppliers.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchSuppliers.fulfilled, (state, { payload }) => {
        state.data = payload
        state.isLoading = false
      })
      .addCase(fetchSuppliers.rejected, (state, { error }) => {
        state.error = error as SerializedError
        state.isLoading = false
      })
      .addCase(updateSupplier.fulfilled, (state, { payload }) => {
        const index = state.data!.findIndex(({ id }) => id === payload.id);

        state.data![index] = payload;
      })
      .addCase(deleteSupplier.fulfilled, (state, { payload }) => {
        const index = state.data!.findIndex(({ id }) => id === payload.id);

        state.data!.splice(index, 1);
      })
  },
  name: moduleName,
  reducers: {}
})

export default suppliersSlice.reducer