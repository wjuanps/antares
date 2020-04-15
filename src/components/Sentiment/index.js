import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../Header";
import Loader from "./Loader";
import Graph from "./Graph";
import Summary from "./Summary";
import Table from "./Table";

import api from "../../services/api";

function Sentiment() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { text } = useParams();

  const fetchResult = async (text) => {
    let response = await api.get(`tweets/${text}`);
    let { data } = response;

    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchResult(text);
  }, [text]);

  return (
    <>
      <Header text={text} />

      {isLoading ? <Loader /> : <Graph data={data} />}
      {isLoading ? <Loader /> : <Summary data={data} />}
      {isLoading ? <Loader /> : <Table data={data} />}
    </>
  );
}

export default Sentiment;
