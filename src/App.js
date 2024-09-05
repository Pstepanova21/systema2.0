import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Rules from "./components/rules/rules";
import Map from "./components/map/map";
import LoginPage from "./components/LoginPage/LoginPage";

import "./App.css";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/";

  return (
    <div className="App">
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
