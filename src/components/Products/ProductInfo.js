import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProduct, deleteProduct } from '../../redux/productActions';

import ProductInfoHeader from 'components/Headers/ProductInfoHeader';
import Footer from '../Footers/Footer'
import ProductNavbar from 'components/Navbars/ProductNavbar';
import {
  Button,
  CardText,
  Container
} from "reactstrap";

class ProductInfo extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  render() {
    const product = this.props.product
    return (
      <div>
        <ProductNavbar />
        <ProductInfoHeader />
        <Container>
          <h2>{product.name}</h2>
          <img alt="..." src={`http://localhost:3000/${product.picture_url}`} style={{height: '445px'}}/>
          <p>{product.description}</p>
          {this.props.loggedInStatus === "LOGGED_IN" ? 
                  <CardText>
                    ${product.price}0
                  </CardText>
                  :
                  <Button
                    color="primary"
                    href="/login-page"
                  >
                    Login To View Price
                  </Button>}
          <p>{product.category}</p>
          <div className="btn-group">
            {this.props.role === "admin" ? 
            <Link to={{ pathname: `/products/${product.id}/edit`, state: { product: product } }} className='btn btn-info'>  
              Edit
            </Link>
            : null }
            {this.props.role === "admin" ?
            <button className="btn btn-danger" type="button" onClick={() => {
              this.props.deleteProduct(product.id)
              this.props.history.push('/products')
              }}>          
              Delete
            </button>
            : null }
            <Link to="/products" className="btn btn-secondary">Close</Link>                                                 
          </div>
          <hr/>

        </Container>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  loggedInStatus: state.login.loggedInStatus,
  product: state.product, 
  role: state.login.user.role
})

const mapDispatchToProps = { getProduct, deleteProduct }

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);