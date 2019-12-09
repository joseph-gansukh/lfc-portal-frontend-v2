import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, AUTHENTICATED_USER, LOGOUT } from './loginTypes'

const initialState = {
  loading: false,
  loggedInStatus: "NOT_LOGGED_IN",
  user: {},
  error: ''
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: 
      return {
        ...state, 
        loading: true
      }

    case LOGIN_SUCCESS:
      return {
        ...state, 
        loading: false,
        loggedInStatus: "LOGGED_IN", 
        user: action.payload
      }
    
    case LOGIN_FAILURE: 
      return {
        loading: false, 
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}, 
        error: action.payload
      }

    case AUTHENTICATED_USER:
        return {
          ...state, 
          user: action.payload,

        }

    case LOGOUT: 
        return {
          ...state, 
          user: action.payload,
          loggedInStatus: "LOGGED_OUT"
        }
    default:
      return state
  }
}

export default loginReducer