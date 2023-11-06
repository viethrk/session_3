import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstComponent from "./components/func-component/first-component";
import DemoContextFnc from "./components/func-component/context-component";
import ThirdComponent from "./components/func-component/third-component";

function App() {
  return (
    <div className="App">
      <DemoContextFnc>
        <FirstComponent />
      </DemoContextFnc>
      <ThirdComponent />
    </div>
  );
}

export default App;
