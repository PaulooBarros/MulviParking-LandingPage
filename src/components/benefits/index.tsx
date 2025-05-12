import React from 'react';
import './style.css';

const Benefits: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">Por que escolher o Mulvi Parking?</h2>
        
        <div className="benefits-grid">
          {/* Benefício 1 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <span className="material-icons">security</span>
            </div>
            <h3 className="benefit-title">Segurança</h3>
            <p className="benefit-description">Login validado por e-mail para acesso seguro ao sistema</p>
          </div>

          {/* Benefício 2 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <span className="material-icons">design_services</span>
            </div>
            <h3 className="benefit-title">Praticidade</h3>
            <p className="benefit-description">Solução intuitiva para administradores e usuários</p>
          </div>

          {/* Benefício 3 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <span className="material-icons">chat</span>
            </div>
            <h3 className="benefit-title">Comunicação</h3>
            <p className="benefit-description">Eficaz entre estacionamento e cliente</p>
          </div>

          {/* Benefício 4 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <span className="material-icons">settings_input_hdmi</span>
            </div>
            <h3 className="benefit-title">Compatibilidade</h3>
            <p className="benefit-description">Com diferentes perfis de estacionamento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;