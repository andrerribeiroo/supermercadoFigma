import "./App.css";
import { Route, BrowserRouter, Routes  } from "react-router-dom";

import Login from "./pages/Login"
import PaginaProduto from "./pages/PaginaProduto";
import CadastrarProduto from "./pages/CadastrarProduto";
import Produto from "./pages/Produto"

function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/paginaproduto" element={<PaginaProduto />} />
        <Route path="/cadastrar" element={<CadastrarProduto />} />
        <Route path="/produto" element={<Produto />} />

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
