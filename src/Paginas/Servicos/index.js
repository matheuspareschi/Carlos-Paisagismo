import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "./servicos.css";

const Servico = () => {
  const navigate = useNavigate();

  return (
    <div className="servicos">
      <h4> Serviços </h4>
      <div className="servicos-container">
        <div className="card card-image">
          <img src="./imagens/IMG_0223.JPG" />
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tipo de serviço </h5>
            <p className="card-text">
              Some quick example text to build on the Tipo de serviço and make
              up the bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card card-image">
          <img src="./imagens/231.JPG" />
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tipo de serviço </h5>
            <p className="card-text">
              Some quick example text to build on the Tipo de serviço and make
              up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card card-image">
          <img src="./imagens/107.JPG" />
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tipo de serviço </h5>
            <p className="card-text">
              Some quick example text to build on the Tipo de serviço and make
              up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card card-image">
          <img src="./imagens/IMG_0218.JPG" />
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tipo de serviço </h5>
            <p className="card-text">
              Some quick example text to build on the Tipo de serviço and make
              up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card card-image">
          <img src="./imagens/IMG_0172.JPG" />
        </div>
      </div>
    </div>
  );
};

export default Servico;
