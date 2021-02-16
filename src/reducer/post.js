import {ERROR_POST, SET_POST} from '../action/action.types'

const initialState = {
    posts: null,
    loading: true,
    error: false
}

export default (state = initialState, action) => {
    switch (action.types) {
        case SET_POST:
            return{
                ...state,
                posts: action.payload,
                loading: false,
                error: false
            }
            case ERROR_POST:
                return{
                    ...state,
                    error: true
                }
    
        default:
            return state
    }
} 