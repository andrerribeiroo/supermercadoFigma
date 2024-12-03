import React from "react";
import "./Produto.css";
import Navbar from "../components/Navbar";

const Produto = () => {
  return (
    <div>
      <Navbar />

      <div className="produto-container">
        <h1>Laranja</h1>
        
        <div className="produto-detalhes">
          <div className="produto-imagem">
            <img
              src="laranja.png"
              alt="Laranja"
              className="imagem-principal"
            />
            <div className="produto-miniaturas">
              <img
                src="maca.png"
                alt="maça"
                className="miniatura"
              />
              <img
                src="pera.png"
                alt="pera"
                className="miniatura"
              />
              <img
                src="pao.png"
                alt="pao"
                className="miniatura"
              />
            </div>
          </div>

          <div className="produto-info">
            <h2>Laranja Laranja</h2>
            <p className="preco">R$ 2,99</p>
            <p className="parcelado">Parcelado em 10x de R$ 0,29</p>
            <button className="adicionar-carrinho">Adicionar ao Carrinho</button>

            <div className="quantidade">
              <button className="botao-quantidade">-</button>
              <span>1</span>
              <button className="botao-quantidade">+</button>
            </div>

            <div className="calcular-cep">
              <input type="text" placeholder="CEP" />
              <button>Calcular</button>
            </div>
          </div>
        </div>

        <div className="produto-descricao">
          <h2>Laranja</h2>
          <p>
            A laranja é uma fruta cítrica amplamente apreciada por seu sabor
            doce e ácido, além de ser uma rica fonte de vitamina C e
            antioxidantes. Cultivada nas melhores condições climáticas, a
            laranja é uma aliada indispensável para a saúde e o bem-estar,
            oferecendo frescor e energia a qualquer momento do dia.
          </p>
          <ul>
            <li><strong>Origem:</strong> Áreas de clima tropical e subtropical</li>
            <li><strong>Tamanho:</strong> Médio a grande</li>
            <li>
              <strong>Composição:</strong> Rica em vitamina C, fibras e antioxidantes
            </li>
            <li><strong>Textura:</strong> Casca resistente e polpa suculenta</li>
            <li><strong>Peso:</strong> 150–300g (em média)</li>
            <li>
              <strong>Uso:</strong> Consumo in natura, sucos e receitas culinárias
            </li>
            <li>
              <strong>Armazenamento:</strong> Local fresco ou refrigerado
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Produto;
