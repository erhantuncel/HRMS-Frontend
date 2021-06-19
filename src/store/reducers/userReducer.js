import { USER_LOGIN, USER_LOGOUT } from "../actions/userActions"
import { user } from "../initialValues/user"


const initialState = {
    user: user
}

export default function userReducer(state = initialState, {type, payload}) {
    switch (type) {
        case USER_LOGIN:
            // state.user = {id: payload.id, role:payload.role}
            return {
                ...state,
                user: {id: payload.id, role:payload.role}
            }
        case USER_LOGOUT:
            state.user = null
            return {...state}
        default:
            return state
    }
}