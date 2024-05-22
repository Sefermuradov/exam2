import MainRoot from "../pages/index";
import ProductDetail from "../pages/ProductDeatil";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Basket from "../pages/Basket";

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
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];
