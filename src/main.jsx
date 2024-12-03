import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AllReviews from "./components/AllReviews";
import ReviewDetails from "./components/ReviewDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import AddReview from "./components/AddReview";
import MyReviews from "./components/MyReviews";
import UpdateReview from "./components/UpdateReview";
import GameWatchlist from "./components/GameWatchlist";
import NotFound from "./components/NotFound";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <AllReviews />,
      },
      {
        path: "/review/:id",
        element: <ReviewDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addReview",
        element: <AddReview />,
      },
      {
        path: "/myReviews",
        element: <MyReviews />,
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview />,
      },
      {
        path: "/myWatchlist",
        element: <GameWatchlist />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
