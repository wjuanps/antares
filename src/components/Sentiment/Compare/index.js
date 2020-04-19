import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../Header";
import Loader from "../Loader";
import Graph from "../Graph";
import Summary from "../Summary";
import Table from "../Table";
import Error from "../Error";

import api from "../../../services/api";

const Compare = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [text, setText] = useState({});
  const [render, setRender] = useState(false);

  const ref = useRef(null);

  const { a, b } = useParams();

  const fetchResult = async (textA, textB) => {
    setError(false);
    try {
      let response = await api.get(`compare/${textA}/${textB}`);
      let { data } = response;

      setData(data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);

      console.error(e);
    }
  };

  useEffect(() => {
    setRender(!!a && !!b);

    if (render) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setText({ a, b });

      setLoading(true);
      fetchResult(a, b);
    }
  }, [render, a, b]);

  return (
    <>
      <Header text={text} compare={true} />

      <div ref={ref}></div>

      {render ? (
        <Render isLoading={isLoading} error={error} data={data} />
      ) : (
        <div></div>
      )}
    </>
  );
};

const Render = ({ isLoading, error, data }) => {
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message="Gráfico" />
      ) : (
        <Graph data={data} compare={true} />
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message="Resumo" />
      ) : (
        <Summary data={data} compare={true} />
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message="Tweets" />
      ) : (
        <Table data={data} compare={true} />
      )}
    </div>
  );
};

export default Compare;
