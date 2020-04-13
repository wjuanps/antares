import React from "react";

import Logo from "../../assets/img/logo.png";

// import { Container } from './styles';

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img class="img-fluid" src={Logo} alt="Logo Antares" />
        </a>

        <a class="btn btn-primary" href="#">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Nav;
