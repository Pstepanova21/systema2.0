import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import User from "../../assets/images/user 1.png";
import { useNavigate } from "react-router-dom";

function Header({ token, setTeamId, teamId }) {
  return (
    <>
      <header>
        <nav>
          <img src={User} alt="User" className="logo" />
          <ul>
            <li>
              <Link to="/about">О НАС</Link>
            </li>
            <li>
              <Link to="/hdsfjdsfj">TASK1</Link>
            </li>
            <li>
              <Link to="/dsfhjsdfh">TASK2</Link>
            </li>
            <li>
              <Link to="/jfhsdhfsdgj">TASK3</Link>
            </li>
            <li>
              <Link to="/jdsflksjfklsjf">TASK4</Link>
            </li>
            <li>
              <Link to="/dlskjflksdjfk">TASK5</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
