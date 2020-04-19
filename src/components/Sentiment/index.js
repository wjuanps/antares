import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Header from "../Header";
import Loader from "./Loader";
import Graph from "./Graph";
import Summary from "./Summary";
import Table from "./Table";
import Error from "./Error";

import api from "../../services/api";

function Sentiment() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  const ref = useRef(null);

  const { text } = useParams();

  const fetchResult = async (text) => {
    setError(false);
    try {
      let response = await api.get(`tweets/${text}`);
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
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setLoading(true);
    fetchResult(text);
  }, [text]);

  return (
    <>
      <Header text={text} />

      <div ref={ref}></div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message="Gráfico" />
      ) : (
        <Graph data={data} />
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message="Resumo" />
      ) : (
        <Summary data={data} />
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message="Tweets" />
      ) : (
        <Table data={data} />
      )}
    </>
  );
}

export default Sentiment;
