import Home from "../Components/Pages/Home/Home";
import Signup from "../Components/Pages/Sign-up/Sign-up";
import Login from "../Components/Pages/Log-in/Login";

const RouteMap = () => {
  return [
    {
      path: "/LogIn",
      element: <Login />,
    },

    {
      path: "/Sign-up",
      element: <Signup />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
  ];
};

export default RouteMap;
