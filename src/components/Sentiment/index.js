import React, { useState } from "react";

import Header from "../Header";
import Loader from "./Loader";
import Graph from "./Graph";
import Summary from "./Summary";
import Table from "./Table";

function Sentiment() {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <Header />
      {isLoading ? <Loader /> : <Graph />}
      {isLoading ? <Loader /> : <Summary />}
      {isLoading ? <Loader /> : <Table />}
    </>
  );
}

export default Sentiment;
