import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <Link className="navbar-brand" to="/antares/">
          <img className="img-fluid" src={Logo} alt="Logo Antares" />
        </Link>

        <Link className="btn btn-primary" to="/antares/compare">
          Comparador
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
