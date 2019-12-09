import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Lake Forest Casket
          
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
