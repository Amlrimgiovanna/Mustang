import "./styles.css";
import Carro from "./Carro";
import Bicicleta from "./Bicicleta";
import Caminhao from "./Caminhao";

export default function App() {
  return (
    <div className="App">
      <h1>Olá, estou aqui para te apresentar um modelo do nosso carro</h1>
      <Carro />
      <Bicicleta />
      <Caminhao />
    </div>
  );
}
