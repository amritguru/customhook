import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import Product from "./components/Product";
import FetchProvider from "./context/FetchContext";
import Products from "./components/Product";

function App() {
  return (
    <FetchProvider>
      <Products />
    </FetchProvider>
  );
}

export default App;
