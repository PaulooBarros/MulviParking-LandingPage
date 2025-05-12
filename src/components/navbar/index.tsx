import React, { useState } from "react";
import { Link } from "react-scroll";
import "./style.css";
import logo from "../../assets/banesecard-logo.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            style={{
              cursor: "pointer",
              color: "white",
              textDecoration: "none",
            }}
          >
            <img
              src={logo} // Substitua com o caminho da imagem
              alt="PIB Augusto Franco"
              className="pibaflogo"
            />
          </Link>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link
            to="how-it-works"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
          >
            Como Funciona
          </Link>
          <Link
            to="benefits-section"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
          >
            Benefícios
          </Link>
          <Link
            to="admin-section"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
          >
            Aplicação
          </Link>

          <Link
            to="cta-section"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
        </div>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
