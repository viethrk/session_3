import React from "react";

class ClassUnmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInterval: null,
    };
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
    clearInterval(this.state.timeInterval);
  };

  render = () => {
    return (
      <div className="demo-unmount">
        <div>Unmounting</div>
      </div>
    );
  };
}

export default ClassUnmount;
