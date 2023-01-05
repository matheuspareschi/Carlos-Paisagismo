import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./imagens/slideshow.jpg"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./imagens/slideshow1.jpg"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./imagens/slideshow2.jpg"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./imagens/slideshow3.jpg"
              alt="Image One"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <h4 className="home-titulo">
        Carlos Paisagismo: projetos personalizados
      </h4>

      <div className="secao-de-conteudo-um">
        <section className="conteudo-secao-um">
          <p>
            Neste site você encontrará meu portifólio com
            <a> desenhos de projetos </a> e exemplos de trabalhos realizados.
            <a> Entre em contato comigo </a> para orçamentos de projetos.
          </p>
        </section>
        <div className="carrossel-secao-um">
          <Carousel fade>
            <Carousel.Item className="carousel-workImages">
              <img
                className="img-carousel-imagensTrabalhos"
                src="./imagens/foto.jpg"
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item className="carousel-workImages">
              <img
                className="img-carousel-imagensTrabalhos"
                src="./imagens/foto2.jpg"
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item className="carousel-workImages">
              <img
                className="img-carousel-imagensTrabalhos"
                src="./imagens/foto6.jpg"
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item className="carousel-workImages">
              <img
                className="img-carousel-imagensTrabalhos"
                src="./imagens/foto7.jpg"
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item className="carousel-workImages">
              <img
                className="img-carousel-imagensTrabalhos"
                src="./imagens/foto8.jpg"
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item className="carousel-workImages">
              <img
                className="img-carousel-imagensTrabalhos"
                src="./imagens/foto9.jpg"
                alt="Image One"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="divisória" />
      
      <div className="secao-de-conteudo-dois">
        <img src="./imagens/IMG_0313.JPG" alt="..." />
        <img src="./imagens/IMG_0324.JPG" alt="..." />
        <img src="./imagens/IMG_4291.JPG" alt="..." />
      </div>
    </div>
  );
};

export default Home;
