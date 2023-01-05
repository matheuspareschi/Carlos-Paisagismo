import "./projetos.css";
import "bootstrap/dist/css/bootstrap.css";

const Projetos = () => {
  return (
    <div className="projetos-container">
      <h4> Projetos </h4>
      <div className="container-de-imagens">
        <div className="card">
          <img src="./imagens/IMG_20160107_120358798.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 1</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/IMG_20160107_120908352.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 2</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/IMG_20160107_120919952.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 3</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/IMG_20160107_120942196.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 4</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/projetos.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 5</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/projetos2.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 6</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/projetos3.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 7</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/projetos4.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 8</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/projetos5.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 9</p>
          </div>
        </div>
        <div className="card">
          <img src="./imagens/projetos6.jpg" />
          <div className="card-body">
            <p className="card-text">Projeto 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
