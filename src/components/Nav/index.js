import React from "react";

import Logo from "../../assets/img/logo.png";

// import { Container } from './styles';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="img-fluid" src={Logo} alt="Logo Antares" />
        </a>

        <a className="btn btn-primary" href="#">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Nav;
