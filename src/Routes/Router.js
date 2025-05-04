// src/Routes/Router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage"; // make sure path is correct
import Listview from "../pages/Listview";
import Gridview from "../pages/Gridview";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/listview",
    element: <Listview />,
  },
  {
    path: "/gridview",
    element: <Gridview />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
