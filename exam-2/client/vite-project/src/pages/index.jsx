import { useState, useEffect } from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import { getAll } from "../services";
import { endpoint } from "../services/constant";

const MainRoot = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    getAll(endpoint.offers)
      .then((response) => {
        setOffers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <Outlet context={[offers, setOffers]} />
    </>
  );
};

export default MainRoot;
