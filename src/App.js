import React from "react";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import CallBack from "./hooks/CallBack";
import State from "./hooks/State";
import State2 from "./hooks/State2";
import Effect from "./hooks/Effect";
import Effect2 from "./hooks/Effect2";
import Reducer from "./hooks/Reducer";
import Context from "./hooks/Context";
import Ref from "./hooks/Ref";
import ForwardRef from "./hooks/ForwardRef";
import LayoutEffect from "./hooks/LayoutEffect";
import Custom from "./hooks/Custom";
import EffectLike from "./classes/Effect";
import Context2 from "./hooks/Context2";
import Reducer2 from "./hooks/Reducer2";
import StateEffectFetch from "./hooks/StateEffectFetch";
import StateToggle from "./hooks/StateToggle";
import Effect3 from "./hooks/Effect3";

const effect = props => alert(props)

export default () => {
  return (
    <div className="container">
      <Jumbotron />
      <div className="d-flex flex-row flex-wrap">
        <Title title="📌 State Hook" comp={<State />} />
        <Title title="📌 State Hook 2" comp={<State2 />} />
        <Title title="📌 State Toggle" comp={<StateToggle onChange={effect} />} />
        <Title title="CallBack" comp={<CallBack />} />
        <Title title="⚡️ Hook de Efeito" comp={<Effect value="1" />} />
        <Title title="⚡️ Hook de Efeito 2" comp={<Effect2 />} />
        <Title title="⚡️ Hook de Efeito 3" comp={<Effect3 onSelect={effect} />} />
        <Title title="Classe simulando Effect" comp={<EffectLike />} />
        <Title title="Reducer" comp={<Reducer />} />
        <Title title="Reducer 2" comp={<Reducer2 initialCount={1} />} />
        <Title title="Context" comp={<Context />} />
        <Title title="Context 2" comp={<Context2 />} />
        <Title title="Ref" comp={<Ref />} />
        <Title title="ForwardRef" comp={<ForwardRef />} />
        <Title title="LayoutEffect" comp={<LayoutEffect />} />
        <Title title="Custom" comp={<Custom />} />
        <Title title="StateEffectFetch" comp={<StateEffectFetch id={2} />} />
      </div>
    </div>
  );
}
