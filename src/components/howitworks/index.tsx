import React from 'react';
import './style.css';

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">Como funciona o Mulvi Parking?</h2>
      <p className="section-description">
        O Mulvi Parking é dividido em duas aplicações integradas:
      </p>
      
      <div className="modules-container">
        {/* Módulo Admin */}
        <div className="module-card admin-module">
          <div className="module-header">
            <span className="material-icons">admin_panel_settings</span>
            <h3>Admin</h3>
          </div>
          <ul className="module-features">
            <li>
              <span className="material-icons">group</span>
              Gestão de usuários com diferentes permissões (administradores e recepcionistas)
            </li>
            <li>
              <span className="material-icons">login</span>
              Acesso seguro, com login via validação de e-mail
            </li>
            <li>
              <span className="material-icons">devices</span>
              Restrição de uso a um dispositivo por vez
            </li>
          </ul>
        </div>

        {/* Módulo Client */}
        <div className="module-card client-module">
          <div className="module-header">
            <span className="material-icons">directions_car</span>
            <h3>Client</h3>
          </div>
          <ul className="module-features">
            <li>
              <span className="material-icons">ev_station</span>
              Cadastro de veículos por placa
            </li>
            <li>
              <span className="material-icons">notifications</span>
              Recebimento de notificações de retirada
            </li>
            <li>
              <span className="material-icons">send</span>
              Solicitação de retirada por outros usuários
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;