import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container over-hidden">
        <div className="row wow animate__animated animate__fadeInUp">
          <div className="col-lg-4 col-md-6 ">
            <div className="footer-content logo-content">
              <div className="logo-box">
                <a href="index.php">
                  <figure>
                    <img
                      src="assets/img/logo/logo.png"
                      alt="footer-logo"
                      className="img-fluid"
                    />
                  </figure>
                </a>
              </div>
              <p>
                At Top 100 Website Advertising, we're your dedicated partner in
                achieving online success through expert SEO services.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="footer-content">
              <ul className="menu-links menus quick-links">
                <li>
                  <a href="index">Home</a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">FAQ’s</a>
                </li>
                <li>
                  <a href="#">PACKAGES</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-content">
              <form action="">
                <p>Subscribe To Our Newsletter</p>
                <div className="newsletter-footer">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="form-control"
                    />
                  </div>
                  <div className="button-group">
                    <button type="button" className="btn primary-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <ul className="contact-info">
                <li>
                  <a href="#">1234 ABC STREET, SUITE 234 A 2345, CA, USA</a>
                </li>
                <li>
                  <a href="tel:+2577884046;">+1 234 567 8901</a>
                </li>
                <li>
                  <a href="mailto:Info@xyz.com">INFO@YOURWEBSITE.COM</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright wow animate__animated animate__fadeInLeft">
          <p className=" text-center">
            Copyright © All Rights Reserved{" "}
            <script>document.write(new Date().getFullYear())</script> -
            www.Top100WebsiteAdvertising.com{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
