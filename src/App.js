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
import { useState } from "react";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/";
  const isPuzzlePage = location.pathname === "/puzzle";
  const [token, setToken] = useState("");
  const [mapImage, setMapImage] = useState(null);
  const [teamId, setTeamId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      {!isAuthPage && !isPuzzlePage && (
        <Header
          setToken={setToken}
          token={token}
          setMapImage={setMapImage}
          mapImage={mapImage}
          setTeamId={setTeamId}
          teamId={teamId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
        <Route
          path="/rules"
          element={
            <Rules
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
        <Route
          path="/map"
          element={
            <Map
              setToken={setToken}
              token={token}
              setMapImage={setMapImage}
              mapImage={mapImage}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
        <Route
          path="/puzzle"
          element={
            <Puzzle
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
      </Routes>
      {!isAuthPage && !isPuzzlePage && (
        <Footer setToken={setToken} token={token} setTeamId={setTeamId}
        teamId={teamId} isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}/>
      )}
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
