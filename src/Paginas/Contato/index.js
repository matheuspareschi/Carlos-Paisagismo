import "./contato.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contato = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_txbuzxt",
        "template_yqpt7wu",
        e.target,
        "qkMEVE-kvbKgfPXOW"
      )

      .then(
        (result) => {
          alert("Mensagem enviada com sucesso! 👍");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contato">
      <h4> Contato </h4>
      <div className="contato-container">
        <form onSubmit={sendEmail}>
          <div className="row  mx-auto">
            <div className="col-lg-8 col-sm-12 form-group mx-auto">
              <label>Nome</label>
              <input
                type="text"
                autoFocus
                className="form-control"
                required
                placeholder="Nome"
                name="name"
              />
            </div>
            <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                required
                placeholder="Seu email"
                name="email"
              />
            </div>

            <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
              <label>Mensagem</label>
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                required
                placeholder="Sua mensagem"
                name="message"
              ></textarea>
            </div>
            <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Enviar mensagem"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contato;
