import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import {USER_SIGNIN, USER_SIGNUP} from '../constants/authConstants'
import * as AuthService from '../services/auth'
import * as AuthActions from '../actions/authActions'

export function* userSignInSaga(param) {
    try {
        const response = yield call(AuthService.userSignIn, param.payload);
        if(!response.status) {
          yield put(AuthActions.userSignInError(response.message ? response.message : response.data))
        }
        else {
          yield put(AuthActions.userSignInResult(response.data))
        }
    
      } catch (error) {
        console.log(error)
        yield put(AuthActions.userSignInError(error.message))
      }
}

export function* userSignUpSaga(param) {
    let payload = {
        status:false,
        message: 'Something Went Wrong'
    }
    try {
        const response = yield call(AuthService.userSignUp, param.payload);
        
        if(response) {
          console.log('Response SAGA:::', response)

          yield put(AuthActions.userSignUpResult(response.res.data))
        }
    
      } catch (error) {
        console.log(error)
        yield put(AuthActions.userSignInError({...payload}))
      }
}


export default function* actionWatcher() {
    yield all([
        takeLatest(USER_SIGNUP, userSignUpSaga),
        takeLatest(USER_SIGNIN, userSignInSaga)
    ])
}