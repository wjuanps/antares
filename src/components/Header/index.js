import React from "react";

// import { Container } from './styles';

const Header = () => {
  return (
    <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">
              O que as pessoas estão dizendo sobre empresas, produtos ou
              serviços
            </h1>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form method="get" action="/sentiment-analysis">
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <input
                    name="q"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Pesquisar por..."
                    required
                  />
                </div>
                <div className="col-12 col-md-3">
                  <button
                    type="submit"
                    className="btn btn-block btn-lg btn-primary"
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
