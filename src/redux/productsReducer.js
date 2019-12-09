import { RECEIVE_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, REPLACE_PRODUCT } from './productActions'

const initialState = []

export default function productsReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_PRODUCTS: 
      return action.products

    case ADD_PRODUCT:
      return [...state, action.payload]

    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload.id);

    case REPLACE_PRODUCT:
      return state.map(product => {
        if(product.id === action.payload.id) {
          return {
            ...product,
            name: action.payload.name,
            description: action.payload.description,
            price: action.payload.price,
            category: action.payload.category
          }
        } else return product
      })
    default:
      return state;
  }
}