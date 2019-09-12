import React, { Component } from "react";

export default class ContestantScroller extends Component {
  constructor(props) {
    super(props);

    let max = props.contestants.length + 1;
    let min = 1;
    var winnerIndex = Math.floor(Math.random() * (+max - +min)) + +min;
    this.state = {
      contestants: props.contestants.map(n => n.name),
      current: props.contestants.slice(0, 1).name,
      winnerIndex,
      index: 0
    };
  }

  limit = 20000;
  start = null;
  timeout = 1;

  rotate = timestamp => {
    if (this.start === null) {
      this.start = timestamp;
    }
    var progress = timestamp - this.start;

    this.setState({
      current: this.state.contestants[Math.floor(Math.random() * (+this.state.contestants.length - +1)) + +1]
    });

    this.timeout = this.timeout + 10;
    console.log(this.timeout * Math.cos(this.timeout));
    if (progress < this.limit)
      setTimeout(() => {
        requestAnimationFrame(this.rotate);
      }, this.timeout);
    else {
      this.setState({
        current: "Winner: " + this.state.contestants[this.state.winnerIndex] + " !!!!"
      });
    }
  };

  componentDidMount() {
    requestAnimationFrame(this.rotate);
  }

  getListElements = () => {
    return (
      <div key={this.state.current} className="item">
        <p>{this.state.current}</p>
      </div>
    );
  };

  render() {
    return <div className="content">{this.getListElements()}</div>;
  }
}
