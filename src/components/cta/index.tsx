import React from 'react';
import './style.css';

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Pronto para transformar a gestão do seu estacionamento?</h2>
        <p className="cta-text">
          Fale com a gente e veja como o Mulvi Parking pode atender às suas necessidades.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">
            Solicitar demonstração
          </button>
          <button className="cta-button secondary">
            Fale conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;