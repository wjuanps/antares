import React, { useState, useRef } from "react";

import Header from "../../Header";
import Loader from "../Loader";
import Graph from "../Graph";
import Summary from "../Summary";
import Table from "../Table";

import api from "../../../services/api";

const Compare = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const textA = useRef(null);
  const textB = useRef(null);

  const fetchResult = async (text) => {
    let response = await api.get(`compare/${text}`);
    let { data } = response;

    setData(data);
    setLoading(false);
  };

  return (
    <>
      <Header text="" compare={true} />

      {isLoading ? <Loader /> : <Graph data={data} />}
      {isLoading ? <Loader /> : <Summary data={data} />}
      {isLoading ? <Loader /> : <Table data={data} />}
    </>
  );
};

export default Compare;
