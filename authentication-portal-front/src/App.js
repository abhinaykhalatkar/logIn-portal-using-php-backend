import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteMap from "./router/router";
import './App.scss';

function App() {

  return (
    <Router>
      <Routes>
        {RouteMap().map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>

  );
}

export default App;
