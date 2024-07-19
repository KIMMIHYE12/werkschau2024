import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Aufgabe1 from "./page/Aufgabe1";
import Aufgabe2 from "./page/Aufgabe2";
import Aufgabe3 from "./page/Aufgabe3";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aufgabe1' element={<Aufgabe1 />} />
        <Route path='/aufgabe2' element={<Aufgabe2 />} />
        <Route path='/aufgabe3' element={<Aufgabe3 />} />
      </Routes>
    </div>
  );
}

export default App;
