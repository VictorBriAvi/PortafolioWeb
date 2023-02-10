import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/AuthTypes";

/* Estilos */

import "../style/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: AuthTypes.logout });
    navigate("/PortafolioWeb");
  };

  return (
    <div>
      <nav className="header navbar navbar-expand-lg  ">
        <div className="container ">
          <a className="navbar-brand" href="/">
            Victor Avila
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          {/*  aca comienza el inicio     */}
          <div
            className="collapse navbar-collapse flex-row-reverse    "
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link  ${isActive ? "active text-dark fw-bolder" : ""}`
                  }
                  aria-current="page"
                  to="/home"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-dark fw-bolder" : ""}`
                  }
                  to="/skills"
                >
                  Tecnologias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-dark fw-bolder" : ""}`
                  }
                  to="/proyectos"
                >
                  Proyectos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-dark fw-bolder" : ""}`
                  }
                  to="/cursos"
                >
                  Cursos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-dark fw-bolder" : ""}`
                  }
                  to="/contactos"
                >
                  Contacto
                </NavLink>
              </li>

              <button className="btn boton_logout" onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
