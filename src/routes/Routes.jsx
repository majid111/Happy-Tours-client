import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./privateRoute";
import UpdateTouristsSpot from "../pages/UpdateTouristsSpot/UpdateTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CountrySpots from "../pages/CountrySpots/CountrySpots";
import TouristsSpotDetails from "../pages/TouristsSpotDetails/TouristsSpotDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://happy-tours-server.vercel.app/countries"),
        element: <Home></Home>,
      },
      {
        path: "/updateTouristsSpot/:id",
        element: (
          <PrivateRoute>
            <UpdateTouristsSpot></UpdateTouristsSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://happy-tours-server.vercel.app/happyTours/${params.id}`),
      },
      {
        path: "/allTouristsSpot",
        loader: () => fetch("https://happy-tours-server.vercel.app/happyTours"),
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/allTouristsSpot/:id",
        loader: ({ params }) =>
          fetch(`https://happy-tours-server.vercel.app/happyTours/${params.id}`),
        element: <TouristsSpotDetails></TouristsSpotDetails>,
      },
      // {
      //   path: "/happyTours/:name",
      //   loader: ({params}) => fetch(`https://happy-tours-server.vercel.app/happyTours/${params.name}`),
      //   element: <CountrySpots></CountrySpots>,
      // },
      {
        path: "/countries/:name",
        loader: ({ params }) =>
          fetch(`https://happy-tours-server.vercel.app/countries/${params.name}`),
        element: <CountrySpots></CountrySpots>,
      },
      {
        path: "/addTouristsSpot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        loader: () => fetch("https://happy-tours-server.vercel.app/happyTours"),
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
