import { combineReducers } from 'redux'
import loginReducer from './login/loginReducer'
import products from './productsReducer'
import product from './productReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  products: products,
  product: product
})

export default rootReducer