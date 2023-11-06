import { useEffect, useContext, useState } from "react";
import SecondComponent from "./second-component";
import { DemoContext } from "./context-component";

const FirstComponent = (props) => {
  const demoContext = useContext(DemoContext);
  const { value, updaValue } = demoContext;
  const [state, setState] = useState(0);
  const [time, setTime] = useState(0);
  const [student, setStudent] = useState(0);

  useEffect(() => {}, [state]);

  useEffect(() => {}, []);
  useEffect(() => {}, [student]);

  const clickDemo = () => {
    updaValue(value + 1);
  };

  return (
    <div>
      Function Component
      <br />
      <button className="btn btn-success" onClick={() => clickDemo()}>
        Click me!
      </button>
      <br />
      <div>{state}</div>
      <br />
      <div>{student}</div>
      <SecondComponent text="text" />
    </div>
  );
};

export default FirstComponent;
