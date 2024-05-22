import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router";
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
