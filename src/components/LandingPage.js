import React from 'react'
import {Link} from 'react-router-dom'

import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  Button,
  Form,
  CardHeader,
  InputGroup,
  Input,
  FormGroup,
  Label
} from "reactstrap";


import LandingPageNavbar from './Navbars/LandingPageNavbar'
import LandingPageHeader from './Headers/LandingPageHeader'
import Footer from './Footers/Footer'

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <LandingPageNavbar />

      <div className="wrapper">
        <LandingPageHeader />
      </div>
      <Container>
            <div className="section section-about-us text-center" style={{paddingBottom: '0'}}>
              <Row>
                <Col md="4">
                  <div>
                    <img
                      alt="..."
                      className=" img-fluid "
                      src={require("assets/img/Great-Quality.png")}
                    ></img>
                    <h4 className="title">Best Quality</h4>
                    <p>
                    With great design and superb quality, our caskets showcase high quality craftsmanship
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div>
                    <img
                      alt="..."
                      className=" img-fluid "
                      src={require("assets/img/Price.png")}
                    ></img>
                    <h4 className="title">Great Price</h4>
                    <p>
                    Great price that offers you the highest margin for the best quality caskets
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div>
                    <img
                      alt="..."
                      className=" img-fluid "
                      src={require("assets/img/Best-Service.png")}
                    ></img>
                    <h4 className="title">Best Service</h4>
                    <p>
                    We go the extra mile to make sure you are satisfied and make your life easier                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container name="aboutUs">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">About Us</h2 >
                <h5>
                We are the leading Chicagoland wholesale casket distributor servicing funeral homes and funeral professionals exclusively. At Lake Forest Casket, our commitment is to provide your families with high quality caskets at great prices. We offer outstanding services such as next day deliveries, customized head cap panels, and most importantly, we always stand behind our products.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview" style={{paddingBottom: '0'}}>
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Lincoln-Blue.jpg") + ")"
                    }}
                  >
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Hampshire.jpg") + ")"
                    }}
                  ></div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="section section-team text-center" style={{paddingTop: '0'}}>
          <div className="content-center">
            <Button className="btn-round" color="info" to="/products" tag={Link}>
                View Product Gallery
            </Button>
          </div>
          <br/>
          <br/>
          <Container>
              <Row>
                <Col md="5">
                  <h2 className="title">Get in Touch</h2>
                  <h4 >
                    You need more information? Feel free to come and checkout our showroom
                  </h4>
                  <div className="info info-horizontal">
                    <div >
                      <h4 className="info-title">Our Location</h4>
                      <p >
                      717-721 N. Yale Ave,  <br />
                      Villa Park, <br />
                      IL 60181 
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div >
                      <h4 className="info-title">Give us a ring</h4>
                      <p >
                        Ph: (630) 627-8880 <br />
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <Card className="card-contact card-raised">
                    <Form id="contact-form" method="post" role="form">
                      <CardHeader className="text-center">
                        <CardTitle tag="h4">Contact Us</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <label>First name</label>
                            <InputGroup>
                              <Input
                                aria-label="First Name..."
                                placeholder="First Name..."
                                type="text"
                              />
                            </InputGroup>
                          </Col>
                          <Col className="pl-2" md="6">
                            <FormGroup>
                              <label>Last name</label>
                              <InputGroup>
                                <Input
                                  aria-label="Last Name..."
                                  placeholder="Last Name..."
                                  type="text"
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label>Email address</label>
                          <InputGroup>
                            <Input
                              placeholder="Email Here..."
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Your message</label>
                          <Input
                            id="message"
                            name="message"
                            rows="6"
                            type="textarea"
                          />
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                                Join Our Monthly Newsletter
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <Button
                              className="btn-round pull-right"
                              color="primary"
                              onClick={(e) => e.preventDefault()}
                            >
                              Send Message
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Container>
        </div>
      <Footer />
    </>
  )
}

export default LandingPage
