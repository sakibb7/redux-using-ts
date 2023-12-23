import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type InitialState = {
    value:{
        searchText:string
    }
}

type searchItem = string

const initialState:InitialState = {
    value:{
        searchText:"hello",
    }
}

export const search = createSlice({
    name:"search",
    initialState,
    reducers:{
        addText: (state, action:PayloadAction<searchItem>) => {
            state.value.searchText === action.payload
        }
    }
})

export const {addText} = search.actions
export default search.reducer