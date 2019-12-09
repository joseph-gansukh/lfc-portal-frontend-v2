import { RECEIVE_PRODUCT, UPDATE_PRODUCT } from './productActions';

export default function productReducer(state = {}, action) {  
  switch (action.type) {
    case RECEIVE_PRODUCT:                                     
      return action.product;

    case UPDATE_PRODUCT:
      return {
        id: action.id,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        category: action.payload.category,
        picture_url: action.payload.picture_url
      }
    default:
      return state;
  }
};