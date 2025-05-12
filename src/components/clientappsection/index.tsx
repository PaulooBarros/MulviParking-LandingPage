import React from 'react';
import './style.css';

const ClientAppSection: React.FC = () => {
  return (
    <section className="client-app-section">
      <div className="client-app-container">
        {/* App Image on Left */}
        <div className="client-app-image">
          <div className="app-phone-mockup">
            <div className="app-screen">
              {/* Replace with your actual app screenshot */}
              <span className="material-icons">directions_car</span>
              <p>Visualização do App</p>
            </div>
          </div>
        </div>

        {/* Content on Right */}
        <div className="client-app-content">
          <div className="client-app-header">
            <h2 className="client-app-title">
              <span className="material-icons">smartphone</span>
              Client - Conveniência para o motorista
            </h2>
            <p className="client-app-subtitle">
              Com o aplicativo Client, o usuário tem autonomia para:
            </p>
          </div>

          <div className="client-features-grid">
            {/* Feature 1 */}
            <div className="client-feature-card">
              <div className="client-feature-icon">
                <span className="material-icons">app_registration</span>
              </div>
              <div className="client-feature-text">
                <h3 className="client-feature-title">Cadastro fácil</h3>
                <p className="client-feature-desc">Cadastrar seu veículo com a placa</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="client-feature-card">
              <div className="client-feature-icon">
                <span className="material-icons">notifications</span>
              </div>
              <div className="client-feature-text">
                <h3 className="client-feature-title">Notificações</h3>
                <p className="client-feature-desc">Receber alertas quando precisar retirar o carro</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="client-feature-card">
              <div className="client-feature-icon">
                <span className="material-icons">person_add</span>
              </div>
              <div className="client-feature-text">
                <h3 className="client-feature-title">Retirada por terceiros</h3>
                <p className="client-feature-desc">Solicitar retirada do veículo informando apenas a placa</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="client-feature-card">
              <div className="client-feature-icon">
                <span className="material-icons">schedule</span>
              </div>
              <div className="client-feature-text">
                <h3 className="client-feature-title">Agilidade</h3>
                <p className="client-feature-desc">Evitar filas e atrasos na hora da saída</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientAppSection;