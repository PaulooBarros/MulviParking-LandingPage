import React from 'react';
import './style.css';

const AdminSection: React.FC = () => {
  return (
    <section className="admin-section">
      <div className="admin-container">
        <div className="admin-content">
          <h2 className="admin-title">
            <span className="material-icons" aria-hidden="true">admin_panel_settings</span>
            Painel Admin - Controle total na palma da mão
          </h2>
          <p className="admin-description">
            A aplicação voltada para quem gerencia o estacionamento. Com o Admin, é possível:
          </p>
          
          <div className="admin-features">
            <div className="feature-card">
              <div className="feature-icon material-icons" aria-hidden="true">group_add</div>
              <h3 className="feature-title">Gestão de Usuários</h3>
              <p className="feature-text">Cadastrar e gerenciar recepcionistas e administradores</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon material-icons" aria-hidden="true">lock</div>
              <h3 className="feature-title">Acesso Seguro</h3>
              <p className="feature-text">Garantir acesso seguro com autenticação de e-mail</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon material-icons" aria-hidden="true">devices_other</div>
              <h3 className="feature-title">Segurança Extra</h3>
              <p className="feature-text">Usar em apenas um dispositivo por vez</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon material-icons" aria-hidden="true">monitor_heart</div>
              <h3 className="feature-title">Monitoramento</h3>
              <p className="feature-text">Acompanhar registros e operações em tempo real</p>
            </div>
          </div>
        </div>
        
        {/* <div className="admin-image">
          <div className="image-placeholder">
            <span className="material-icons" aria-hidden="true">dashboard</span>
            <p>Visualização do Painel Admin</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AdminSection;