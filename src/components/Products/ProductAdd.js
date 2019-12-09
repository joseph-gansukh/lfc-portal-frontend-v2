import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import { connect } from 'react-redux'
import { addProduct } from '../../redux/productActions'
import ProductNavbar from '../Navbars/ProductNavbar'
import ProductInfoHeader from 'components/Headers/ProductInfoHeader';
import Footer from 'components/Footers/Footer';

class ProductAdd extends React.Component {
  state = { name: '', description: '', price: '', category: '', picture: null}

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const product = this.state
    const productData = new FormData()
    productData.append('product[name]', this.state.name)
    productData.append('product[description]', this.state.description)
    productData.append('product[price]', this.state.price)
    productData.append('product[category]', this.state.category)
    productData.append('product[picture]', this.state.picture)
    this.props.addProduct(product);
    this.props.history.push('/products')
  };

  handleFile = event => {
    this.setState({
      picture: event.target.files[0]
    })
  }

  render() {
    console.log('picture', this.state.picture)
    
    return (
      <div>
        <ProductNavbar />
        <ProductInfoHeader />
        <Container>
          <h4>Add Product</h4>
          <Form onSubmit={ this.handleSubmit }>
          <FormGroup>
            <Label>Product Name</Label>
            <Input
              required
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              type="text"
            ></Input>
            <Label>Product Description</Label>
            <Input
              required
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              type="text"
            ></Input>
            <Label>Product Price</Label>
            <Input
              required
              value={this.state.price}
              onChange={this.handleChange}
              name="price"
              type="text"
            ></Input>
            <Label>Product Category</Label>
            <Input
              required
              value={this.state.category}
              onChange={this.handleChange}
              name="category"
              type="text"
            ></Input>
          </FormGroup>
          <Input type="file" onChange={this.handleFile} required></Input>

          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
      </div>
    );
  }
}


const mapDispatchToProps = { addProduct };

export default connect(null, mapDispatchToProps)(ProductAdd);