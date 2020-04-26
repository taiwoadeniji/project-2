import {SignupPageState,  ADD_NEW_SIGNUP_TO_USERSLIST, SignupPageActionTypes } from './types';

const initialState: SignupPageState = {
    userslist: [
        {
            id: 1,
            name:'usename'
        },
        {
            id: 2,
            name:'password'
        },
        {
            id: 3,
            name:'interest'
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