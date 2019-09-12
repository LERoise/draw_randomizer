import React, { Component } from 'react';
import './App.css';
import ContestantScroller from './contestantScroller';
import { getContestants } from './services/contestants-servce';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contestants: null,
      currentNames: null,
      index: 0
    }
  }

  componentDidMount() {
    getContestants().then(contestants =>
      this.setState({ contestants })
    );
  }

  changeName() {

  }

  render() {
    return <div className="App">
      <header className="App-header">
      </header>
      {this.state.contestants !== null && (<ContestantScroller contestants={this.state.contestants}></ContestantScroller>)}
    </div>
  };
}

export default App;
