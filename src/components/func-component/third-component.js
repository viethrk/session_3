import { useEffect, useContext } from "react";
import { useState } from "react";
import { DemoContext } from "./context-component";

const ThirdComponent = (props) => {
  const showTime = () => {};

  // didmount
  useEffect(() => {
    showTime();

    return () => {
      console.log(3333);
    };
  }, []);

  return (
    <div>
      ThirdComponent
      <br />
    </div>
  );
};

export default ThirdComponent;
