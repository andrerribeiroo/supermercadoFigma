import "./App.css";
import { Route, BrowserRouter, Routes  } from "react-router-dom";

import Login from "./pages/Login"
import PaginaProduto from "./pages/PaginaProduto";

function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<PaginaProduto />} />

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
