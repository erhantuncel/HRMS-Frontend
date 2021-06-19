export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

export function logIn(user) {
    return {
        type: USER_LOGIN,
        payload: user
    }
}

export function logOut(user) {
    return {
        type: USER_LOGOUT,
        payload: user
    }
}