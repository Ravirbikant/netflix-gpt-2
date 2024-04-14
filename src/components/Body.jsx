import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import ShowTrailer from "./ShowTrailer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/showTrailer",
      element: <ShowTrailer />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
