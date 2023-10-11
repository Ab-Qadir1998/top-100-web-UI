import React from "react";

const Header = () => {
  return (
    <header class="without-login wow animate__animated animate__fadeInUp">
      <div class="sec-header">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="index">
              <img src="assets/img/logo/logo.png" alt="logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="index">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Website Advertising <i class="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Website Marketing <i class="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Internet Advertising{" "}
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item border-0" href="#">
                        Website Digital Advertising{" "}
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    FAQ’s
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    PACKAGES
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
                <form>
                  <a href="#" class="btn primary-btn  start" type="submit">
                    SCHEDULE A CALL
                  </a>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
