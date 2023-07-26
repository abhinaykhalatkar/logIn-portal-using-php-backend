import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        {RouteMap().map((route, index) => (
          <Route key={index} path={route.path} element={route.element} exact />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
