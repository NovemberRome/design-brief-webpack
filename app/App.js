import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './components/Button';
import BriefModel from './models/Brief';
import Brief from './components/Brief';
import styles from './App.scss';
import checkStatus from './utilities/checkStatus';
import {updateBriefAction} from './ducks/Brief';

const Loading = ({}) => <div>
  <h1>Loading...</h1>
</div>

// Map Redux's state to props for App:
const mapStateToProps = (state, ownProps) => {
  return {brief: state.Brief}
}
// Map Redux's dispatch to actions to props for App:
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateBrief: brief => dispatch(updateBriefAction(brief))
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // Create state as an empty object:
    this.state = {};
    this.requestNewBrief();
  }
  // Determine loading based on whether or not we have received a brief yet:
  static getDerivedStateFromProps(props, state) {
    return {
      loading: Object.keys(props.brief).length === 0
    }
  }
  requestNewBrief() {
    fetch('https://obscure-ravine-37780.herokuapp.com/', {
      method: 'GET'
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(brief => {
        // Dispatch the action:
        this.props.updateBrief({
          ...brief,
          businessName: brief.business.name,
          businessType: brief.business.type
        })
      })
      .catch(err => {
        console.error(err);
        // Handle the error here.
      });
  }
  newBrief = (ev) => {
    ev.preventDefault();
    this.requestNewBrief();
  }
  render() {
    return this.state.loading
      ? <Loading/>
      : (<div className={styles.container}>
        <Brief brief={this.props.brief}/>
        <p className={styles.centered}>
          <Button onClick={this.newBrief}>Get a New Brief</Button>
        </p>
      </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
