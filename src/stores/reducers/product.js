import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setData } = productSlice.actions

export default productSlice.reducer