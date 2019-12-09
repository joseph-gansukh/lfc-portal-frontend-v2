import React from "react";
import { Link } from 'react-router-dom'
import { Container, Button } from "reactstrap";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/hero-cover-lfc.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img
              alt="..."
              style={{width: '470px'}}
              src={require("assets/img/LFC-logo.png")}
            ></img>
            <br></br>
            <br></br>
            <br></br>
            <h2>
              We offer top quality merchandise selling only to licensed funeral homes
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <Button className="btn-round" color="info" to="/products" tag={Link}>
              View Products
            </Button>
          </div>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
