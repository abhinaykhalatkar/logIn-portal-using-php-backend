import Home from "../Components/Pages/Home/Home";
import Signup from "../Components/Pages/Sign-up/Sign-up";
import Login from "../Components/Pages/Log-in/Login";

const RouteMap = (isUserLoggedIn, setIsUserLoggedIn, setUserName,userName) => {
  return [
    {
      path: "/LogIn",
      element: <Login setIsUserLoggedIn={setIsUserLoggedIn} setUserName={setUserName} />,
    },

    {
      path: "/Sign-up",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Home isUserLoggedIn={isUserLoggedIn} setUserName={setUserName} userName={userName} setIsUserLoggedIn={setIsUserLoggedIn}/>,
    },
  ];
};

export default RouteMap;
//  test@test.com
//  Qwertz123@