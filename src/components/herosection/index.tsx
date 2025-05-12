import React from "react";
import "./style.css";
import EstacionamentoImage from "../../assets/estacionamento-amarelo.svg";
import { Link } from "react-scroll"; 
const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-flex">

        <div className="hero-image">
          <img src={EstacionamentoImage} alt="Estacionamento" />
        </div>

        {/* Texto */}
        <div className="hero-content">
          <h1>MULVI PARKING</h1>
          <p className="subtitulo">
            O jeito inteligente e seguro de gerenciar estacionamentos.
          </p>

          <div className="hero-buttons">
            <Link
              to="cta-section"
              smooth={true}
              duration={2000}
              className="btn btn-outline"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
