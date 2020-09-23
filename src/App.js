import React from "react";
import "./styles.css";
import CallBack from "./hooks/CallBack";
import Title from "./components/Title";
import State from "./hooks/State";

const titles = {
  callBack: "CallBack",
  state: "State",
}

export default function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>React Hooks Playground</h1>
        <p className="lead">Atualize pequenos elementos da tela com os React Hooks (ganchos).</p>
        <hr className="my-4" />
        <p>Teste com <strong>CodeSandBox</strong> ou faça <i>fork</i> do repositório para o seu GitHub. Pull Requests são bem-vindas!</p>
        <a className="btn btn-primary btn-lg" href="http://reactjs.org" role="button">Saiba mais sobre Hooks</a>
      </div>
      <div className="d-flex flex-row">
        <Title title={titles.callBack} comp={<CallBack />} />
        <Title title={titles.state} comp={<State />} />
      </div>
    </div>
  );
}
