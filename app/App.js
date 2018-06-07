import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './components/Button';
import BriefModel from './models/Brief';
import Brief from './components/Brief';
import styles from './App.scss';
import { requestBriefAction } from './ducks/Brief';

const Loading = ({}) => <div>
  <h1>Loading…</h1>
</div>

// Map Redux's state to props for App:
const mapStateToProps = (state, ownProps) => {
  return {brief: state.Brief}
}
// Map Redux's dispatch to actions to props for App:
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestBrief: brief => dispatch(requestBriefAction(brief))
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // Create state as an empty object:
    this.state = {};
  }
  // Determine loading based on whether or not we have received a brief yet:
  static getDerivedStateFromProps(props, state) {
    return {
      loading: Object.keys(props.brief).length === 0
    }
  }
  // Request a brief after start-up:
  componentDidMount() {
    this.props.requestBrief();
  }
  // Request a brief every time the user clicks a button:
  newBrief = (ev) => {
    ev.preventDefault();
    this.props.requestBrief();
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
