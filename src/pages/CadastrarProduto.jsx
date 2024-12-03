import React from "react";
import "./Cadastrar.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CadastrarProduto = () => {
  const navigate = useNavigate();

  const handleCadastrar = (e) => {
    e.preventDefault();
    navigate("/paginaproduto");
  };

  return (
    <div className="container">
      <Navbar />
      <div className="imagem2">
        <img src="card2.png" alt="" />

        <div className="aba">
          <h1>Cadastrar Novo Produto</h1>

          <form onSubmit={handleCadastrar}>

            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Preço" />
            <input type="text" placeholder="Categoria" />
            <button type="submit" href="/paginaproduto"> Cadastrar </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastrarProduto;
