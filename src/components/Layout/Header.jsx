import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../constants/mediaConstants";
import { navItems } from "../../constants/data";

const Header = () => {
  return (
    <header className="without-login wow animate__animated animate__fadeInUp">
      <div className="sec-header">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="top-100-web" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                {navItems?.map((item, i) => (
                  <li
                    className={`nav-item ${item?.className && item?.className}`}
                    key={i}
                  >
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to={item?.link}
                    >
                      {item?.label}
                    </Link>
                    {item?.subItems && (
                      <ul className="dropdown-menu">
                        {item?.subItems?.map((subItem, i) => (
                          <li key={i}>
                            <Link className="dropdown-item">
                              {subItem?.label}{" "}
                              <i className="fas fa-chevron-right"></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                {/* <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Website Advertising <i className="fas fa-chevron-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Website Marketing <i className="fas fa-chevron-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Internet Advertising{" "}
                        <i className="fas fa-chevron-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item border-0" to="#">
                        Website Digital Advertising{" "}
                        <i className="fas fa-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    FAQ’s
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    PACKAGES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    CONTACT
                  </Link>
                </li>
                <form>
                  <Link to="#" className="btn primary-btn  start" type="submit">
                    SCHEDULE A CALL
                  </Link>
                </form> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
