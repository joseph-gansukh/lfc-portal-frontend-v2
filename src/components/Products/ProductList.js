import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductNavbar from 'components/Navbars/ProductNavbar';
import {
  Button,
  Card,
  CardImg,
  CardBody, 
  CardTitle, 
  CardText,
  Container,
  Col,
  Row
} from "reactstrap";
import Footer from 'components/Footers/Footer';
import ProductInfoHeader from 'components/Headers/ProductInfoHeader';

class ProductList extends Component {
  render() {
    console.log('role:', this.props.role)
    if(this.props.products.length) {
      return (
        <div >
          <ProductNavbar />
          <ProductInfoHeader />
          <div >
          <Container className="text-center">
            <h4 >All Products</h4>
          </Container>
          </div>
          <div className="section section-tabs">
        <Container>
          <Row>
            
          {this.props.products.map(product => {                     
            console.log(product.picture_url)
            return (
              <div  key={product.id}>
              <Col >
              <Card style={{ width: "20rem"}}>
                <div className="img_container">
                  <CardImg  alt="..." src={`http://localhost:3000/${product.picture_url}`} top></CardImg>
                </div> 
                <CardBody style={{ paddingTop: "0"}}>
                  <CardTitle style={{marginTop: "0"}} tag="h4"><Link to={`/products/${product.id}`}>{product.name}</Link></CardTitle>
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
                </CardBody>
              </Card>
              </Col>
              </div>
            );
          })}

          </Row>
          </Container>
          </div>
          <Footer />
        </div>
      )    
    } else {
      return (<div>No products</div>)
    }
  }
}

const mapStateToProps = (state) => ({ 
  products: state.products,
  loggedInStatus: state.login.loggedInStatus,
  role: state.login.user.role
});  

export default connect(mapStateToProps)(ProductList);    