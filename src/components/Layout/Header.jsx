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
                  !item?.subItems ? (
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
                    </li>
                  ) : (
                    <li
                      className={`nav-item dropdown ${item?.className && item?.className}`}
                      key={i}
                    >
                      <Link
                        aria-current="page"
                        to={item?.link}
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item?.label}
                      </Link>
                      {item?.subItems && (
                        <ul className="dropdown-menu">
                          {item?.subItems?.map((subItem, i) => (
                            <li key={i}>
                              <Link className="dropdown-item">
                                {subItem?.label}
                                <i className="fas fa-chevron-right"></i>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
