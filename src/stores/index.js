import { configureStore } from '@reduxjs/toolkit'
import productSlice from './reducers/product'

export const store = configureStore({
    reducer: {
        product: productSlice
    },
})

