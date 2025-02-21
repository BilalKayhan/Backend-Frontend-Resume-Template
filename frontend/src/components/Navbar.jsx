import { useContext } from "react";
import { NavbarContext } from "../contexts/NavbarContext";
import PropTypes from "prop-types";

function Navbar() {
  const { navbar } = useContext(NavbarContext);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Clarence Taylor</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="../assets/img/profile.jpg"
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive" >
        <ul className="navbar-nav">
          {
            navbar.map(navbars => 
              
              <li key={navbars._id} className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#about">
                              {navbars.name}
                          </a>
                      </li>
              
          )}
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  navbar: PropTypes.object,
};
