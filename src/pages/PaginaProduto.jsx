import "./PaginaProduto.css";
import Navbar from "../components/Navbar";

const PaginaProduto = () => {
  return (
    <div>
      <Navbar />
      <button className="cadastrar">Cadastrar Novo Produto</button>
    </div>
  );
};

export default PaginaProduto;
