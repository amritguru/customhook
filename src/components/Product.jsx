import React, { useContext } from "react";
import { FetchContext } from "../context/FetchContext";
import "./Product.css";

const Products = () => {
  const { data, loading, error } = useContext(FetchContext);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="grid">
        {data &&
          data.slice(0, 12).map((item) => (
            <div className="card" key={item.id}>
              <img src={item.images[0]} alt={item.title} />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
