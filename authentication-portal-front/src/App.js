
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import RouteMap from "./router/router";
import "./App.scss";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        {RouteMap(isUserLoggedIn, setIsUserLoggedIn, setUserName,userName).map((route, index) => (
          <Route key={index} path={route.path} element={route.element} exact />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
