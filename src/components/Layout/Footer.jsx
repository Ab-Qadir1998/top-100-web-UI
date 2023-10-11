import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container over-hidden">
        <div class="row wow animate__animated animate__fadeInUp">
          <div class="col-lg-4 col-md-6 ">
            <div class="footer-content logo-content">
              <div class="logo-box">
                <a href="index.php">
                  <figure>
                    <img
                      src="assets/img/logo/logo.png"
                      alt="footer-logo"
                      class="img-fluid"
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
          <div class="col-lg-4 col-md-6 ">
            <div class="footer-content">
              <ul class="menu-links menus quick-links">
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
          <div class="col-lg-4 col-md-6">
            <div class="footer-content">
              <form action="">
                <p>Subscribe To Our Newsletter</p>
                <div class="newsletter-footer">
                  <div class="form-group">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      class="form-control"
                    />
                  </div>
                  <div class="button-group">
                    <button type="button" class="btn primary-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <ul class="contact-info">
                <li>
                  <a href="javascript:void(0)">
                    1234 ABC STREET, SUITE 234 A 2345, CA, USA
                  </a>
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
        <div class="copyright wow animate__animated animate__fadeInLeft">
          <p class=" text-center">
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
