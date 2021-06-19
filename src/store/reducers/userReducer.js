import { USER_LOGIN, USER_LOGOUT } from "../actions/userActions"
import { user } from "../initialValues/user"


const initialState = {
    user: user
}

export default function userReducer(state = initialState, {type, payload}) {
    switch (type) {
        case USER_LOGIN:
            return {
                ...state,
                user: payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}