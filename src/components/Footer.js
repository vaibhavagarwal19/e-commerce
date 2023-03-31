import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are a leading e-commerce platform providing a wide range of products to our customers.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main Street, Anytown USA<br/>Phone: (123) 456-7890<br/>Email: info@example.com</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
