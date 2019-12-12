import React from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../../redux/productActions';
import { getProduct, deleteProduct } from '../../redux/productActions';

import ProductInfoHeader from 'components/Headers/ProductInfoHeader';
import Footer from '../Footers/Footer'
import ProductNavbar from 'components/Navbars/ProductNavbar';
import {
  Container,
  Input
} from "reactstrap";

class ProductEdit extends React.Component {
  state = { picture: null}

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.product.id;
    const name = this.state.name ? this.state.name : this.props.product.name;
    const description = this.state.description ? this.state.description : this.props.product.description;
    const price = this.state.price ? this.state.price : this.props.product.price;
    const category = this.state.category ? this.state.category : this.props.product.category;
    const picture = this.state.picture ? this.state.picture : this.props.product.picture_url;
    const product = {id: id, name: name, description: description, price: price, category: category}
    console.log('picture: ', picture)
    const productData = new FormData()
    productData.append('product[name]', name)
    productData.append('product[description]', description)
    productData.append('product[price]', price)
    productData.append('product[category]', category)
    productData.append('product[picture]', picture)
    // this.props.updateProduct(product, this.props.history);
    debugger
    this.props.updateProduct(productData, this.props.history);
  };

  handleCancel = () => {
    this.props.history.push(`/products/${this.props.product.id}`);
  }

  handleFile = event => {
    this.setState({
      picture: event.target.files[0]
    })
  }

  render() {
    console.log(this.props.product)
    return (
      <div>
        <ProductNavbar />
        <ProductInfoHeader />
        <Container>
          <h1>Edit {this.props.product.name}</h1>
          <form onSubmit={this.handleSubmit}>
            <p>Current Picture</p>
            <div className="form-group">
              <img alt="..." src={`http://localhost:3000/${this.props.product.picture_url}`} style={{height: '445px'}}/>
            </div>
            <Input type="file" onChange={this.handleFile} ></Input>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" defaultValue={this.props.product.name} onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text"name="description" rows="5" defaultValue={this.props.product.description} onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input name="price" rows="5" defaultValue={this.props.product.price} onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input name="category" defaultValue={this.props.product.category} onChange={this.handleChange} className="form-control" />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-dark">Update</button>
              <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ product: state.product });

const mapDispatchToProps = { updateProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);