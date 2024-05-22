import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import { getAll } from "../services/index";
import { endpoint } from "../services/constant";
import { useEffect, useState } from "react";

const MainRoot = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll(endpoint.products)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <Outlet context={[products, setProducts]} />
    </div>
  );
};

export default MainRoot;
