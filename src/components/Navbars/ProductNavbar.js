import React from "react";
import { connect } from 'react-redux'
import { logout } from '../../redux/login/loginActions'

import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ProductNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 200 ||
        document.body.scrollTop > 200
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
        ) {
          setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
            {/* {logoImg} */}
            <img style={{width: '100px'}} src={require(`assets/img/LFC-logo.png`)} alt={'...'}/>
            </NavbarBrand>
        

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <NavItem>
                <NavLink
                  href="/products"
                >
                  <p>Products</p>
                </NavLink>
            </NavItem>

              {props.role === "admin" ?
              <NavItem><NavLink href="/products/new"><p>Add New Product</p></NavLink></NavItem>
            : null }
              <NavItem>
              {props.loggedInStatus === "LOGGED_IN" ? 
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="/"
                  onClick={() => props.logout()}
                >
                  <i className="now-ui-icons users_circle"></i>
                  <p>Logout</p>
                </Button>
                : 
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="/login-page"
                >
                  <i className="now-ui-icons users_circle"></i>
                  <p>Login</p>
                </Button> }
              </NavItem>
            
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.login.loggedInStatus,
    role: state.login.user.role
  };
}

const mapDispatchToProps = dispatch => { 
  return {
    logout: () => dispatch(logout())
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(ProductNavbar);
