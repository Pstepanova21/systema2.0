import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Puzzle1 from "./components/puzzle/puzzle1";
import Puzzle2 from "./components/puzzle/puzzle2";
import Puzzle3 from "./components/puzzle/puzzle3";
import Puzzle4 from "./components/puzzle/puzzle4";
import Puzzle5 from "./components/puzzle/puzzle5";
import LoginModal from "./components/LoginModal/LoginModal"; // Импортируйте ваш модал
import "./App.css";
import { useState } from "react";

function AppContent() {
  const location = useLocation();
  const isPuzzlePage = [
    "/hdsfjdsfj",
    "/dsfhjsdfh",
    "/jfhsdhfsdgj",
    "/jdsflksjfklsjf",
    "/dlskjflksdjfk",
  ].includes(location.pathname);

  const [token, setToken] = useState("");
  const [teamId, setTeamId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Header
        setToken={setToken}
        token={token}
        setTeamId={setTeamId}
        teamId={teamId}
        isPuzzlePage={isPuzzlePage}
        setIsModalOpen={setIsModalOpen} // Передаем функцию для открытия модала
      />
      <Routes>
        <Route path="/" element={<Navigate to="/hdsfjdsfj" />} />
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
      {!isPuzzlePage && (
        <Footer
          setToken={setToken}
          token={token}
          setTeamId={setTeamId}
          teamId={teamId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen && (
        <LoginModal onClose={() => setIsModalOpen(false)} token={token} />
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
