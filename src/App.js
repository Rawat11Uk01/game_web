import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./routes";
import "./assets/css/GameApp.css";
import Appbar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      console.log("My prop Layout ======>", prop.link);
      if (prop.layout === "/game") {
        console.log("If condition    ");
        return (
          <Route
            path={prop.layout + prop.link}
            element={prop.Element}
            key={key}
          />
        );
      } else {
        console.log("AHHHHHHHI");
        return null;
      }
    });
  };

  return (
    <>
      <Appbar />
      <Router>
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate replace={true} to="/game" />} />
          <Route
            exact
            path="/game"
            element={<Navigate replace={true} to="/game/home" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Footer />

    </>
  );
}

export default App;
