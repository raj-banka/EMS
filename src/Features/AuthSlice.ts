import {createSlice , PayloadAction} from "@reduxjs/toolkit"
import { UserType } from "../Interfaces/UserType"
import { getLocalStorage } from "../utils/LocalStorage";

export interface AuthType {
    admin : UserType[];
    employees : UserType[];
}

const initialState : AuthType = {
    admin : getLocalStorage().admin || [],
    employees : getLocalStorage().employees || []
}

export const AuthSlice = createSlice({
    name : "authInfo" ,
    initialState ,
    reducers : {
        setUserData : (state , action : PayloadAction<AuthType>) => {
            state.admin = action.payload.admin;
            state.employees = action.payload.employees;
        }
    }
})

export const {setUserData} = AuthSlice.actions;
export default AuthSlice.reducer