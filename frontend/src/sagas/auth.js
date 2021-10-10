import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import {USER_SIGNIN, USER_SIGNUP} from '../constants/authConstants'
import * as AuthService from '../services/auth'
import * as AuthActions from '../actions/authActions'

export function* userSignInSaga(param) {
    let payload = {
        status:false,
        message: 'Could not fetch data'
    }
    try {
        const response = yield call(AuthService.userSignIn, param);
        
        if(response) {
          console.log('Response SAGA:::', response)

          yield put(AuthActions.userSignInResult(response.res.data))
        }
    
      } catch (error) {
        console.log(error)
        yield put(AuthActions.userSignInResult({...payload}))
      }
}

export function* userSignUpSaga(param) {
    let payload = {
        status:false,
        message: 'Something Went Wrong'
    }
    try {
        const response = yield call(AuthService.userSignUp, param);
        
        if(response) {
          console.log('Response SAGA:::', response)

          yield put(AuthActions.userSignUpResult(response.res.data))
        }
    
      } catch (error) {
        console.log(error)
        yield put(AuthActions.userSignInResult({...payload}))
      }
}


export default function* actionWatcher() {
    yield all([
        takeLatest(USER_SIGNUP, userSignUpSaga),
        takeLatest(USER_SIGNIN, userSignInSaga)
    ])
}