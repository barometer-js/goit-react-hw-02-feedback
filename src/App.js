import React, { Component, Fragment } from 'react';
import 'normalize.css';
import './App.css';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    good: 10,
    neutral: 2,
    bad: 2,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  addFeedback = () => {
    console.log(this.button);
    // switch (this.button.value) {
    //   case 'Good':
    //     this.setState(prevState => ({ good: prevState.good + 1 }));
    //     break;

    //   case 'Neutral':
    //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    //     break;

    //   case 'Bad':
    //     this.setState(prevState => ({ bad: prevState.bad + 1 }));
    //     break;

    //   default:
    //     console.log('Invalid subscription type');
    // }
  };

  render() {
    return (
      <Fragment>
        <Section>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.addFeedback}>
            Good
          </button>
          <button type="button" onClick={this.addFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.addFeedback}>
            Bad
          </button>
          <h2>Statistics</h2>
          <ul>
            <li>{`Good: ${this.state.good}`}</li>
            <li>{`Neutral: ${this.state.neutral}`}</li>
            <li>{`Bad: ${this.state.bad}`}</li>
            <li>{`Total: ${this.countTotalFeedback()}`}</li>
            <li>{`Positive feedback: ${this.countPositiveFeedbackPercentage()}%`}</li>
          </ul>
        </Section>
      </Fragment>
    );
  }
}

export default App;
