import {} from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../Pages/Home/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },

    ],
  }
]);

export default router;
