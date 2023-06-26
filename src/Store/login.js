import {createSlice} from "@reduxjs/toolkit";

const initialLoginState = {isAuth: false, token: ''};

const loginSlice = createSlice({
    name: "login",
    initialState: initialLoginState,
    reducers: {
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;
        },
        saveToken(state, actions){
            state.token = actions.payload;
        }
    }
});

export default loginSlice.reducer;
export const loginActions = loginSlice.actions;