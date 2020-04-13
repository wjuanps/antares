import React from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes />
    <Footer />
  </BrowserRouter>
);

export default App;
