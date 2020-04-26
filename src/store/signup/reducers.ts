import {SignupPageState,  ADD_NEW_SIGNUP_TO_USERSLIST, SignupPageActionTypes } from './types';

const initialState: SignupPageState = {
    userslist: [
        {
            id: 1,
            name:'usename',
            password: "1111",
            interests: "2222"
        },
        {
            id: 2,
            name:'password',
            password: "1111",
            interests: "2222"
        },
        {
            id: 3,
            name:'interest',
            password: "1111",
            interests: "2222"
        },
           
    ]
}

export function signupReducer ( state = initialState, action: SignupPageActionTypes) {
    switch (action.type){
        case ADD_NEW_SIGNUP_TO_USERSLIST:
            return {
                ...state,

                userslist: [...state.userslist, action.payload]
            }
            default:
                return state;
    }
}