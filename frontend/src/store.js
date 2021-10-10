import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootSaga from './sagas'
import {userAuthenticationReducer} from './reducers/authReducer'
import setAuthToken from './services/setToken'

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

if(userInfoFromStorage) {
  setAuthToken(userInfoFromStorage.token);
}

const initialState = {
    user: { 
        userInfo: userInfoFromStorage
    }
}

const reducers = combineReducers({
    user: userAuthenticationReducer,
    // weight: weightReducer,
    // calorie: calorieReducer,
    // goals: goalReducer,
    // workout: workoutReducer,
})


const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

export default store;