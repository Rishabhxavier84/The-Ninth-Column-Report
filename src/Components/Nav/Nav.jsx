import React from "react";
import {} from "./Nav.css";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const Nav = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg  my-0 sticky-top">
      <div className="container-fluid px-3 py-2 my-0 mx-2 div-bg">
        <Link to="/" className="navbar-brand px-5 nav-color">
          <b>
            The Ninth Column Report{" "}
            <sup>
              <i className="fa-solid fa-trademark"></i>
            </sup>
          </b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end px-5"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav nav-underline">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => setCategory("general")}
                  >
                    General
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => setCategory("business")}
                  >
                    Business
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => setCategory("technology")}
                  >
                    Technology
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => setCategory("health")}
                  >
                    Health
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => setCategory("science")}
                  >
                    Science
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => setCategory("entertainment")}
                  >
                    Entertainment
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => setCategory("sports")}
                  >
                    Sports
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <div style={{ margin: "1rem" }}>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
