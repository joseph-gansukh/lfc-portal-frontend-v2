import axios from 'axios';
// import history from '../history'

export const RECEIVE_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const REPLACE_PRODUCT = 'REPLACE_PRODUCT';

const apiUrl = 'http://localhost:3000/api/products';

export const getProducts = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}.json`)
     .then(resp => {
       dispatch({type: RECEIVE_PRODUCTS, products: resp.data})
     })
     .catch(error => { throw(error )})
  }
}

export const addProduct = ({ name, description, price, category, picture }) => {
  return (dispatch) => {
    const productData = new FormData()
    productData.append('product[name]', name)
    productData.append('product[description]', description)
    productData.append('product[price]', price)
    productData.append('product[category]', category)
    productData.append('product[picture]', picture)
    fetch(`${apiUrl}.json`, {
      method: 'post',
      body: productData,
      contentType: false
    })
      .then(resp => resp.json())
      .then(product => {
        console.log('product: ', product);
        dispatch({type: ADD_PRODUCT, payload: {id: product.id, name: product.name, description: product.description, price: product.price, category: product.category, picture: product.picture}})
        dispatch(getProducts())
      })
    // return axios.post(`${apiUrl}.json`, {name, description, price, category, picture})
    //   .then(response => {
    //     let data = response.data;
    //     dispatch({type: ADD_PRODUCT, payload: {id: data.id, name: data.name, description: data.description, price: data.price, category: data.category, picture: data.picture}})
    //   })

      .catch(error => { throw(error) });
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}.json`)
      .then(response => {
        dispatch({type: RECEIVE_PRODUCT, product: response.data});
      })
      .catch(error => { 
        throw(error); 
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}.json`)
      .then(response => {
        dispatch({type: REMOVE_PRODUCT, payload: {id}})
      })
      .catch(error => {
        throw(error);
      });
  };
};



export const updateProduct = (product, history) => {
  const productId = product.id;
  return function(dispatch) {
    return axios.patch(`${apiUrl}/${product.id}.json`, {name: product.name, description: product.description, price: product.price, category: product.category})
      .then(response => {
        const data = response.data;
        dispatch({type: UPDATE_PRODUCT, payload: {id: data.id, name: data.name, description: data.description, price: data.price, category: data.category}})
        dispatch({type: REPLACE_PRODUCT, payload: {id: data.id, name: data.name, description: data.description, price: data.price, category: data.category}})
      })
      .then(() => {
        console.log('hitting this or not????')
        history.push(`/products/${productId}`)
      })
      .catch(error => { throw(error) });
  };
};
// export const updateProduct = (product, history) => {
//   const productId = product.id;
//   return function(dispatch) {
//     const productData = new FormData()
//       productData.append('product[name]', name)
//       productData.append('product[description]', description)
//       productData.append('product[price]', price)
//       productData.append('product[category]', category)
//       productData.append('product[picture]', picture)
//     return fetch(`${apiUrl}/${product.id}.json`, {name: product.name, description: product.description, price: product.price, category: product.category}, {
//       method: 'post',
//       body: productData,
//       contentType: false
//     })
//       .then(response => {
//         const data = response.data;
//         dispatch({type: UPDATE_PRODUCT, payload: {id: data.id, name: data.name, description: data.description, price: data.price, category: data.category}})
//         dispatch({type: REPLACE_PRODUCT, payload: {id: data.id, name: data.name, description: data.description, price: data.price, category: data.category}})
//       })
//       .then(() => {
//         console.log('hitting this or not????')
//         history.push(`/products/${productId}`)
//       })
//       .catch(error => { throw(error) });
//   };
// };