import React, { useRef, useEffect } from "react";

import utils from "../../services/utils";

const Header = ({ text, compare = false }) => {
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
            <div className="form-row">
              {compare ? <CompareButton /> : <SentimentButton text={text} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const SentimentButton = ({ text }) => {
  const input = useRef(null);

  useEffect(() => {
    input.current.value = text.replace(/\-+/g, " ");
  }, [input]);

  const handleSubmit = () => {
    let { value } = input.current;
    if (!!value) {
      value = utils.slugify(value);
      window.open(`/sentiment-analysis/${value}`, "_self");
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="col-12 col-md-9 mb-2 mb-md-0">
        <input
          ref={input}
          onKeyUp={handleKeyUp}
          type="text"
          className="form-control form-control-lg"
          placeholder="Pesquisar por..."
          required
        />
      </div>
      <div className="col-12 col-md-3">
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-block btn-lg btn-primary"
        >
          Buscar
        </button>
      </div>
    </>
  );
};

const CompareButton = () => {
  const inputA = useRef(null);
  const inputB = useRef(null);

  const handleSubmit = () => {};

  return (
    <>
      <div className="col-6 col-md-5 mb-2 mb-md-0">
        <input
          ref={inputA}
          type="text"
          className="form-control form-control-lg"
          placeholder="Pesquisar por..."
          required
        />
      </div>
      <div className="col-6 col-md-5 mb-2 mb-md-0">
        <input
          ref={inputB}
          type="text"
          className="form-control form-control-lg"
          placeholder="Pesquisar por..."
          required
        />
      </div>
      <div className="col-12 col-md-2">
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-block btn-lg btn-primary"
        >
          Buscar
        </button>
      </div>
    </>
  );
};

export default Header;
