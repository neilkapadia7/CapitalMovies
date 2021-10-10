import {USER_SIGNIN, USER_SIGNUP, USER_LOGOUT, USER_SIGNIN_RESULT, USER_SIGNUP_RESULT} from '../constants/authConstants'
export const userSignIn = (payload) => {
    return {
        type: USER_SIGNIN,
        payload
    }
}

export const userSignInResult = (payload) => {
    return {
        type: USER_SIGNIN_RESULT,
        payload
    }
}

export const userSignUp = (payload) => {
    return {
        type: USER_SIGNUP,
        payload
    }
}

export const userSignUpResult = (payload) => {
    return {
        type: USER_SIGNUP_RESULT,
        payload
    }
}


export const logout = () => {
    localStorage.removeItem('userInfo')
    return {
        type: USER_LOGOUT,
    }
}