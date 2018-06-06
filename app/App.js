import React, { Component } from 'react';
import Button from './components/Button';
import BriefModel from './models/Brief';
import Brief from './components/Brief';
import styles from './App.scss';
import checkStatus from './utilities/checkStatus';

const Loading = ({}) => <div><h1>Loading...</h1></div>

class App extends Component {
  constructor(props) {
    super(props);
    this.requestNewBrief();
    this.state = {
      loading: true
    }
  }
  requestNewBrief() {
    fetch('http://localhost:3000/',{
      method: 'GET'
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(brief => this.setState({
        brief: {
          ...brief,
          businessName: brief.business.name,
          businessType: brief.business.type
        },
        loading: false
      }))
      .catch(err => {
        console.error(err);
        // Handle the error here.
      })
  }
  newBrief = (ev) => {
    ev.preventDefault();
    this.requestNewBrief();
  }
  render() {
    return this.state.loading ? <Loading/> : (
      <div className={styles.container}>
        <Brief brief={this.state.brief}/>
        <p className={styles.centered}>
          <Button onClick={this.newBrief}>Get a New Brief</Button>
        </p>
      </div>
    );
  }
}

export default App;
