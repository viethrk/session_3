import React from "react";
import ClassUnmount from "./class-unmount";

class DemoClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      works: [],
      numberClick: 0,
    };
  }

  showTime = () => {
    // const date = new Date();
    // this.setState({ time: date.toLocaleString() });
    // setInterval(() => {
    //   const dateInterval = new Date();
    //   // this.state.time = dateInterval.toLocaleString();
    //   this.setState({ time: dateInterval.toLocaleString() });
    // }, 1000);
    this.setState({ numberClick: this.state.numberClick + 1 });
  };

  addWork = () => {
    const value = document.getElementById("work").value;
    const newWorks = [...this.state.works];
    newWorks.push(value);
    this.setState({ works: newWorks });
    this.showTime();
  };

  deleteWork = (index) => {
    const newWorks = [...this.state.works];
    newWorks.splice(index, 1);
    this.setState({ works: newWorks });
  };

  componentDidMount = () => {};

  componentDidUpdate = () => {
    console.log(this.state.numberClick);
    if (this.state.numberClick < 10) {
      setTimeout(() => {
        this.setState({ numberClick: this.state.numberClick + 1 });
      }, 1000);
    }
  };

  componentWillUnmount = () => {};

  render = () => {
    // Không bao giờ viết như này
    return (
      <div>
        <div>{this.state.time}</div>
        <div>Time</div>
        <button onClick={this.showTime}>Show time</button>
        <br />
        <br />
        <div>
          <input id="work" />
          <button onClick={this.addWork}>Add Work</button>
          <ClassUnmount />
        </div>
        <div></div>
      </div>
    );
  };
}

export default DemoClassComponent;
