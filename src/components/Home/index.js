import React, { useState } from "react";

import Header from "../Header";

const Home = () => {
  const [c, co] = useState(0);
  return (
    <>
      <Header />
      <section
        className="features-icons text-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 mb-3">
              <h2 className="text-uppercase">Mais pesquisados</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <a className=" m-auto text-primary" href="">
                    <i className="fa fa-external-link"></i>
                  </a>
                </div>
                <h3>Samsung note 10 plus</h3>
                <p className="lead mb-0">55 consultas nas últimas 4 semanas</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <a className=" m-auto text-primary" href="">
                    <i className="fa fa-external-link"></i>
                  </a>
                </div>
                <h3>Mi note 10</h3>
                <p className="lead mb-0">43 consultas nas últimas 4 semanas</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <a className=" m-auto text-primary" href="">
                    <i className="fa fa-external-link"></i>
                  </a>
                </div>
                <h3>Iphone 11 pro max</h3>
                <p className="lead mb-0">41 consultas nas últimas 4 semanas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={{ color: "#275E7C" }}>Como funciona o Antares</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-1"></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Input dos dados</h2>
              <p className="lead mb-0">
                O processo se inicia com a partir da entrada de qualquer
                produto, serviço ou empresa informada pelo usuário ou pela
                escolha entre os termos mais pesquisados.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 text-white showcase-img showcase-2"></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Cálculo do Sentimento</h2>
              <p className="lead mb-0">
                Com base na pesquisa do usuário, o Antares faz uma busca nas
                redes sociais e utilizando Machine Learning faz cáculos
                heurísticos para verificar a tendencia de cada sentimento
                presente nos textos coletados.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-3"></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Visualização dos resultados</h2>
              <p className="lead mb-0">
                Ao fim de todas as etapas, o sistema exibe ao usuário os
                resultados de todo o processo em forma de gráficos e tabelas com
                um resumo dos textos encontrados, bem como o sentimento atrelado
                a cada um deles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Pronto para começar? Faça sua busca!</h2>
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
      </section>
    </>
  );
};

export default Home;
