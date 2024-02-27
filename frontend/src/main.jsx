import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./routes/RootLayout";
import Places, { loader as placeLoader } from "./routes/Places";
import "./index.css";
import PlaceDetail, { loader as placeDetailLoader, } from "./components/source/placeDetail";
import Home from "./components/source/Home";
import About from "./components/source/About";
import History, { loader as historyLoader } from "./components/source/History";
import MakeReserve, { action as reserveAction, } from "./components/source/MakeReserve";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/placelist", element: <Places />, loader: placeLoader },
      {
        path: "/:placeid",
        element: <PlaceDetail />,
        loader: placeDetailLoader,
        children: [
          {
            path: "make-reserve",
            element: <MakeReserve />,
            action: reserveAction,
          },
        ],
      },
      { path: "/about", element: <About /> },
      { path: "/history", element: <History />, loader: historyLoader },
      { path: "/reserve", element: <MakeReserve />, action: reserveAction },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
