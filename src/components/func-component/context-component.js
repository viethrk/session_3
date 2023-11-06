import { useState } from "react";
import { createContext } from "react";

export const DemoContext = createContext();

const DemoContextFnc = (props) => {
  const [stateContext, setStateContext] = useState("");

  return (
    <DemoContext.Provider
      value={{
        value: stateContext,
        updaValue: setStateContext,
      }}
    >
      {props.children}
    </DemoContext.Provider>
  );
};

export default DemoContextFnc;
