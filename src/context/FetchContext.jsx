import { createContext } from "react";
import useFetch from "../costomhooks/useFetch";

export const FetchContext = createContext();

const FetchProvider = ({ children }) => {
  const fetchState = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <FetchContext.Provider value={fetchState}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchProvider;
