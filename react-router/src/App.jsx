// Módulos Externos:
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** O QUE SÃO ESSES COMPONENTES?
 * - O BrowserRouter deve ser o componente que envolve tudo que depende do react-router;
 * - Enquanto isso, Routes define as áreas em que vamos colocar as nossos "routes" (rotas, em inglês);
 * - Por fim, Route recebe o path (caminho). Se o caminho for igual ao da URL, ele irá renderizar o componente que estiver no bloco chaveado em "element={}".
 */

// Módulos Internos:
import Header from "./Header";
import Home from "./Home";
import Sobre from "./Sobre";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;