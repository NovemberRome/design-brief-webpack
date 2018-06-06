import React, { Component } from 'react';
import Button from './components/Button';
import BriefModel from './models/Brief';
import Brief from './components/Brief';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brief: new BriefModel()
    }
  }
  newBrief = (ev) => {
    ev.preventDefault();
    this.setState({
      brief: new BriefModel()
    });
  }
  render() {
    return (
      <div>
        <Brief brief={this.state.brief}/>
        <Button onClick={this.newBrief}>Get a New Brief</Button>
      </div>
    );
  }
}

export default App;
