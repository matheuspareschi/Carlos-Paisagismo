import "./header.css";
import { useNavigate } from 'react-router-dom'; // version 5.2.0

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-header">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigate("/")}>
            Home
          </a>
          <a className="navbar-brand"  onClick={() => navigate("/Projetos")}>
            Projetos
          </a>
          <a className="navbar-brand"  onClick={() => navigate("/Servicos")}>
            Serviços
          </a>
          <a className="navbar-brand" onClick={() => navigate("/Contato")}>
            Contato
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
