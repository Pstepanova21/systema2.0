import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ isPuzzlePage, setIsModalOpen }) {
  return (
    <header className={isPuzzlePage ? "puzzle-header" : ""}>
      <nav>
        <ul>
          <li>
            <Link to="/hdsfjdsfj">TASK 1</Link>
          </li>
          <li>
            <Link to="/dsfhjsdfh">TASK 2</Link>
          </li>
          <li>
            <Link to="/jfhsdhfsdgj">TASK 3</Link>
          </li>
          <li>
            <Link to="/jdsflksjfklsjf">TASK 4</Link>
          </li>
          <li>
            <Link to="/dlskjflksdjfk">TASK 5</Link>
          </li>
          <li>
            <Link to="#" onClick={() => setIsModalOpen(true)}>
              ВХОД
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
