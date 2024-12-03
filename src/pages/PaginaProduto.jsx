import "./PaginaProduto.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


const PaginaProduto = () => {

  const navigate = useNavigate();

  const handleCadastrar = (e) => {
    
    navigate("/cadastrar");
  };

  // const para ir para o produto
  
  const handleProduto = (e) => {
    navigate("/produto");
  };

  return (
    <div>
      <Navbar />

      {/* usei o onclick para navegar,(e a mesma cosia que o onclick) */}

      <button onClick={handleCadastrar} className="cadastrar" >Cadastrar Novo Produto</button>

      <div className="tabela-container">
        <table className="tabela-produtos">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>

            <tr onClick={handleProduto}>
              <td>Laranja</td>
              <td>Fruta</td>
              <td>R$ 2,00 <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Excluir" className="icone-lixeira"/></td>
              
            </tr>

            {/* Essa aba e para adicionar mais produtos */}

            <tr>
              <td></td>
              <td></td>
              <td>R$ 0,00</td>
              
            </tr>

            {/* Essa aba e para adicionar mais produtos */}

            <tr>
              <td></td>
              <td></td>
              <td>R$ 0,00</td>
              
            </tr>

              {/* Essa aba e para adicionar mais produtos */}

            <tr>
              <td></td>
              <td></td>
              <td>R$ 0,00</td>
              
            </tr>

              {/* Essa aba e para adicionar mais produtos */}

            <tr>
              <td></td>
              <td></td>
              <td>R$ 0,00</td>
            
            </tr>

              {/* Essa aba e para adicionar mais produtos */}

            <tr>

              <td></td>
              <td></td>
              <td>R$ 0,00</td>
          
            </tr>

              
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaginaProduto;
