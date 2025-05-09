import React from "react";
import "./style.css"; // Mude para o CSS específico do componente

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Protech Solutions</h3>
            <p>
              A Protech Solutions é uma empresa focada em consultoria de TI que
              atua há mais de 6 anos com desenvolvimento, manutenção e testes de
              softwares em ambiente corporativo, atendendo grandes empresas.
            </p>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p>joaopaulo@protechsolutions.com.br</p>
            <p>(79) 9999-9999</p>
          </div>
          <div className="footer-section">
            <h3>Endereço</h3>
            <div className="social-links">
              <p>Av. Francisco Porto, 593
              - Sala 1 - Grageru - 
              Aracaju - SE
              49025-230
              </p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/protechsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Protech Solutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
