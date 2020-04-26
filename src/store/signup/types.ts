export interface UsersList{
    id: number,
    name: string,
    password: string,
    interests: string
}
export interface SignupPageState {
    userslist:UsersList[]
}

export const ADD_NEW_SIGNUP_TO_USERSLIST = 'ADD_NEW_SIGNUP_TO_USERSLIST';

interface AddNewSignupToUsersList {
    type: typeof ADD_NEW_SIGNUP_TO_USERSLIST,
    payload: UsersList
} 


export type SignupPageActionTypes = AddNewSignupToUsersList;
