import { useState } from "react";
import "./Style.css";
function App() {
  const [peso, SetPeso] = useState("");
  const [altura, SetAltura] = useState("");
  const [mensagem,SetMensagem]=useState("");
  const [imcMensagem,SetImcMensagem] = useState("");

  function calculaIMC(){
    const alt = altura/100;
    const imc = peso / (alt*alt);

    SetImcMensagem("Seu IMC = " + imc.toFixed(2));

    if(imc<18.6){
      SetMensagem("Você está a baixo do peso.")
    }
    else if(imc >=18.6 && imc <24.9){
      SetMensagem(" o seu peso está ideal.")

    }
    else if (imc >=24.9 && imc <34.9){
      SetMensagem("Você está um pouco acima do peso.")
    }
    else if(imc > 34.9){
      SetMensagem("Cuidado! Obesidade.")
    }
  }
  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="AreaInput">
        <input
          type="text"
          value={peso}
          onChange={(e) => SetPeso(e.target.value)}
          placeholder="Peso em (kg) ex:90"
        ></input>
        <input
          type="text"
          value={altura}
          onChange={(e) => SetAltura(e.target.value)}
          placeholder="Altura em (cm) ex :180"
        ></input>
        <button onClick={calculaIMC}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
      <h2>{imcMensagem}</h2>
    </div>
  );
}

export default App;
