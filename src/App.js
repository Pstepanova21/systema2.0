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
import Puzzle1 from "./components/puzzle/puzzle1";
import Puzzle2 from "./components/puzzle/puzzle2";
import Puzzle3 from "./components/puzzle/puzzle3";
import Puzzle4 from "./components/puzzle/puzzle4";
import Puzzle5 from "./components/puzzle/puzzle5";
import "./App.css";
import { useState } from "react";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/";
  const isPuzzlePage = [
    "/hdsfjdsfj",
    "/dsfhjsdfh",
    "/jfhsdhfsdgj",
    "/jdsflksjfklsjf",
    "/dlskjflksdjfk",
  ].includes(location.pathname);

  const [token, setToken] = useState("");
  const [mapImage, setMapImage] = useState(null);
  const [teamId, setTeamId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      {!isPuzzlePage && !isAuthPage && (
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
          path="/hdsfjdsfj"
          element={
            <Puzzle1
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
        <Route
          path="/dsfhjsdfh"
          element={
            <Puzzle2
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
        <Route
          path="/jfhsdhfsdgj"
          element={
            <Puzzle3
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
        <Route
          path="/jdsflksjfklsjf"
          element={
            <Puzzle4
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
        <Route
          path="/dlskjflksdjfk"
          element={
            <Puzzle5
              setToken={setToken}
              token={token}
              setTeamId={setTeamId}
              teamId={teamId}
            />
          }
        />
      </Routes>
      {!isPuzzlePage && !isAuthPage && (
        <Footer
          setToken={setToken}
          token={token}
          setTeamId={setTeamId}
          teamId={teamId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
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
