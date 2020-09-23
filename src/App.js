import React from "react";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import CallBack from "./hooks/CallBack";
import State from "./hooks/State";
import Effect from "./hooks/Effect";
import Reducer from "./hooks/Reducer";
import Context from "./hooks/Context";
import Ref from "./hooks/Ref";
import ForwardRef from "./hooks/ForwardRef";
import LayoutEffect from "./hooks/LayoutEffect";
import Custom from "./hooks/Custom";

export default () => {
  return (
    <div className="container">
      <Jumbotron />
      <div className="d-flex flex-row flex-wrap">
        <Title title="CallBack" comp={<CallBack />} />
        <Title title="State" comp={<State />} />
        <Title title="Effect" comp={<Effect value="1" />} />
        <Title title="Reducer" comp={<Reducer />} />
        <Title title="Context" comp={<Context />} />
        <Title title="Ref" comp={<Ref />} />
        <Title title="ForwardRef" comp={<ForwardRef />} />
        <Title title="LayoutEffect" comp={<LayoutEffect />} />
        <Title title="Custom" comp={<Custom />} />
      </div>
    </div>
  );
}
