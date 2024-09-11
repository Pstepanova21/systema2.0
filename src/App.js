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
import Puzzle from "./components/puzzle/puzzle";

import "./App.css";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/";
  const isPuzzlePage = location.pathname === "/puzzle";

  return (
    <div className="App">
      {!isAuthPage && !isPuzzlePage && <Header />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/map" element={<Map />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
      {!isAuthPage && !isPuzzlePage && <Footer />}
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
