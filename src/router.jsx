import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayOut from "./LayOut/HomeLayOut";
import Home from "./page/Home";
import Categorycon from "./page/Categorycon";
import EventDetails from "./page/EventDetails";
import AuthLayOut from "./LayOut/AuthLayOut";
import Loading from "./page/Loading";
import Login from "./page/Login";
import Register from "./page/Register";
import Privateprovider from "./Provider/Privateprovider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/category/:id",
        element:<Categorycon></Categorycon>,
        loader:()=>fetch('/public/news.json')

      }
    ]
  },
  {
    path:"/eventDetails/:id",
    element:<Privateprovider>
      <EventDetails></EventDetails>
      </Privateprovider>,
    loader:()=>fetch('/public/news.json'),
    hydrateFallbackElement:<Loading></Loading>
  },
  {
    path:"/Auth",
    elememt:<AuthLayOut></AuthLayOut>,
    children:[
      {
        path:"/Auth/Login",
        element:<Login></Login>
      },
      {
        path:"/Auth/Register",
        element:<Register></Register>
      }
    ]
  },
  {
    path:"/",
    element:<h1>Error 404</h1>
  }
]);

export default router