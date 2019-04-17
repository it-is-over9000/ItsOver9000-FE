import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions'

const initialState = {
    fen: "start",
    loggingIn: false
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                loggingIn: false
            }
            default:
            return state
    
        }
    }
    
    export default reducer
