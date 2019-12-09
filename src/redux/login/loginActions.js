import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, AUTHENTICATED_USER, LOGOUT } from './loginTypes'
import axios from 'axios'


export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS, 
    payload: user
  }
}

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE, 
    payload: error
  }
}

export const authenticatedUser = user => {
  return {
    type: AUTHENTICATED_USER, 
    payload: user || {}
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT,
    payload: {}
  }
}

export const loginUser = (user, history) => {
  return function (dispatch) {
    dispatch(loginRequest())
    axios.post("http://localhost:3000/sessions", {
      user: {
        email: user.email, 
        password: user.password
      }
    },
    { withCredentials: true}
    ).then(resp => {
      if (resp.data.status === 401) {
        const error = resp.data.status
        dispatch(loginFailure(error))
      } else {
        console.log('---resp from login', resp)
        const user = resp.data.user
        dispatch(loginSuccess(user))
        user.role === 'admin' 
          ?
          history.push('/products')
          :
          history.push('/products')
      }
    }).catch(error => {
      console.log('Login error', error)
    })
  }
}

export const checkLoginStatus = () => {
  return function (dispatch) {
    axios.get('http://localhost:3000/logged_in', {withCredentials: true})
    .then(resp => {
      console.log('---resp in app.js', resp.data.user)
      if (resp.data.logged_in) {
        dispatch(authenticatedUser(resp.data.user))
        dispatch(loginSuccess(resp.data.user))
      }
    }).catch(error => {
      console.log(error)
    })
  }
}

export const logout = () => {
  return function (dispatch) {
    axios.delete('http://localhost:3000/logout', {withCredentials: true})
    .then(resp => {
      console.log(resp);
      dispatch(logoutUser())
    })
  }
}