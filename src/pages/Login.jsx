import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/paginaproduto");
  };

  return (
    <div className="container">
      <div className="imagem">
        <img src="image.png" alt="" />

        <div className="aba">
          <h1>Seja Bem-Vindo</h1>
          <h2 className="titu">Fazer login</h2>

          <form onSubmit={handleLogin}>

            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="submit" href="/paginaproduto"> Criar conta </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
