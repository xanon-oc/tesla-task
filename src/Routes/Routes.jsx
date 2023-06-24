import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Information from "../Components/Information";
import Guide from "../Components/Guide";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/guide",
        element: <Guide />,
      },
    ],
  },
]);
