import {GET_MOVIES, SET_LOADING, MOVIES_RESULT, MOVIES_ERROR, END_LOADING} from '../constants/moviesConstant'

let initialState = {
    movies: null, 
    loading: false, 
    error: null
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
          return {
            ...state,
            loading: true,
            movies: null,
            error: null
          }
        case SET_LOADING:
          return {
            ...state,
            loading: null
          }
        case MOVIES_RESULT:
          return {
            ...state,
            loading: false,
            movies: action.payload,
            error: null          
          }
        case MOVIES_ERROR: 
          return {
            ...state,
            movies: null,
            loading: false,
            error: action.payload
          }
        case END_LOADING: 
          return {
            ...state,
            loading: false
          }
        default:
            return state;
    }
} 