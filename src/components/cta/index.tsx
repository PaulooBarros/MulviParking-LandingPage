import React from "react";
import "./style.css";

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Pronto para transformar a gestão do seu estacionamento?
        </h2>
        <p className="cta-text">
          Fale com a gente e veja como o Mulvi Parking pode atender às suas
          necessidades.
        </p>
        <div className="cta-buttons">
          {/* <button className="cta-button primary">
            Solicitar demonstração
          </button> */}
          <a
            href="https://www.linkedin.com/company/protechsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary social-link"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
