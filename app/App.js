import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './components/Button';
import Brief from './components/Brief';
import Defaults from './components/Defaults';
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
    this.state = {
      defaults: {}
    };
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
    // Make a list of defaults, with any empty string values removed:
    const filteredDefaults = Object.entries(this.state.defaults) // Creates an array of arrays [[key, value], [key, value]]
      .filter(([key, value]) => value !== '') // Removes elements that have an empty string as value
      .reduce((obj, [key,value]) => { // Reconstitutes an object from that array of arrays
        obj[key] = value;
        return obj;
      }, {});
    filteredDefaults['adjectives'] = filteredDefaults['adjectives'].split(/\s*\,\s*/g);
    this.props.requestBrief(filteredDefaults); // Pass the filtered default list to the action
  }
  // This function takes a particular prop and returns a function that updates
  // state.default[prop] when the user provides new input:
  changeProp = prop => ev => {
    this.setState({
      defaults: {
        ...this.state.defaults,
        // If prop is adjectives, split into an array at each comma:
        [prop]: ev.target.value//prop === 'adjectives' ? ev.target.value.split(/\s*\,\s*/) : ev.target.value
      }
    })
  }
  render() {
    const actions = {};
    // This processes the brief object and generates functions.
    // There's probably a way to cache this, but I'm working quickly:
    Object.keys(this.props.brief).forEach(key => {
      if(key === 'business') { return; }
      actions[key] = this.changeProp(key);
    })
    return this.state.loading
      ? <Loading/>
      : (<div className={styles.container}>
        <Brief brief={this.props.brief}/>
        <p className={styles.centered}>
          <Button onClick={this.newBrief}>Get a New Brief</Button>
        </p>
        <Defaults defaults={this.state.defaults} actions={actions}/>
      </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
