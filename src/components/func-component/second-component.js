import { useEffect, useContext, useState } from "react";
import { DemoContext } from "./context-component";
import ThirdComponent from "./third-component";

const SecondComponent = (props) => {
  const [state, setState] = useState("");
  const demoContext = useContext(DemoContext);
  const { value } = demoContext;

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
      Unmount Component
      <br />
      {value}
      <ThirdComponent />
    </div>
  );
};

export default SecondComponent;
