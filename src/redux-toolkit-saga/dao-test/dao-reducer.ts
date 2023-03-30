import { PayloadAction } from '@reduxjs/toolkit';
import { GET_NETWORK_REQUEST } from './dao-types';
import { createSlice } from '@reduxjs/toolkit';


interface NetworkState {
    isLoading : boolean,
    data : any
}
const initialState:NetworkState = {
    isLoading: false,
    data:null
}

const getDataNetwork = createSlice({
    name:'network',
    initialState,
    reducers:{
        getNetworkRequest: (state:NetworkState) => {
            state.isLoading = true
            state.data = null
        },
        getNetworkSuccess: (state:NetworkState,action:PayloadAction<string>) => {
            state.isLoading = false
            state.data = action.payload
        },
        getNetworkError: (state:NetworkState) => {
            state.isLoading = false
            state.data = null
        }
    }
})
export const {getNetworkRequest,getNetworkSuccess,getNetworkError} = getDataNetwork.actions
export default getDataNetwork.reducer