import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import ProductAdd from './components/Products/ProductAdd'
import ProductEdit from './components/Products/ProductEdit'
import ProductInfo from './components/Products/ProductInfo'
import ProductList from './components/Products/ProductList'
import {checkLoginStatus} from './redux/login/loginActions'
import {connect} from 'react-redux'


class App extends React.Component {
  componentDidMount() {
    this.props.checkLoginStatus()
  }
  render(){
    return (
      <Router >
        <Main />
      </Router>
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path="/" render={props => <LandingPage {...props} />} />
    <Route exact path="/login-page" render={props => <LoginPage {...props} />} /> />
    <Route exact path="/products" component={ProductList} />
    <Route exact path="/products/new" component={ProductAdd} />
    <Route exact path="/products/:id" component={ProductInfo} />
    <Route exact path="/products/:id/edit" component={ProductEdit} />
  </Switch>
);

const mapDispatchToProps = {checkLoginStatus}

export default connect(null, mapDispatchToProps)(App);
