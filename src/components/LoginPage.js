import React from "react";
import { connect } from 'react-redux'
import { loginUser } from '../redux/'

import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Container,
  Col
} from "reactstrap";

import LandingPageNavbar from "components/Navbars/LandingPageNavbar.js";
import Footer from "components/Footers/Footer.js";

function LoginPage(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <LandingPageNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/hero-cover-lfc.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
           
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form onSubmit={(e) => {
                  e.preventDefault()
                  const user = {email, password}
                  console.log('props', props)
                  const history = props.history
                  props.loginUser(user, history)
                  }}>
                  <div >
                      <img
                        alt="..."
                        style={{width: '470px'}}
                        src={require("assets/img/LFC-logo.png")}
                      ></img>
                    </div>

                    <br />
                    <br />

                  <FormGroup>
                    <label>Email address</label>
                    <Input
                      aria-describedby="emailHelp"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      type="email"
                      onChange={e => setEmail(e.target.value)}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <label>Password</label>
                    <Input
                      id="exampleInputPassword1"
                      placeholder="Password"
                      type="password"
                      onChange={e => setPassword(e.target.value)}
                    ></Input>
                  </FormGroup>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.login.loggedInStatus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user, history) => dispatch(loginUser(user, history)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
