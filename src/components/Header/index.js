import React from "react";

// import { Container } from './styles';

const Header = () => {
  return (
    <header class="masthead text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h1 class="mb-5">
              O que as pessoas estão dizendo sobre empresas, produtos ou
              serviços
            </h1>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form method="get" action="/sentiment-analysis">
              <div class="form-row">
                <div class="col-12 col-md-9 mb-2 mb-md-0">
                  <input
                    name="q"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Pesquisar por..."
                    required
                  />
                </div>
                <div class="col-12 col-md-3">
                  <button
                    type="submit"
                    class="btn btn-block btn-lg btn-primary"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
