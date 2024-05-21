import MainRoot from "../pages/index";
import Home from "../pages/Home";
import AddOffers from "../pages/AddOffers";
import DetailOffers from "../pages/DetailOffers";
import Basket from "../pages/basket";


export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "addoffers",
        element: <AddOffers />,
      },
      {
        path: "/:id",
        element: <DetailOffers />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];
