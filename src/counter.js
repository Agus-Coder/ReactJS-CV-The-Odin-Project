import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState((state) => ({
      count: 0,
    }));
  }

  componentDidMount(){
      console.log('componen did mount');
      console.log('-------------------');
}

  render() {
    console.log("render");
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('did update');
    console.log('----------');
  }
}
