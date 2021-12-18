import React, { Component, Fragment } from 'react';
import 'normalize.css';
import './App.css';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <Fragment>
        <Section>
          <h1>Please leave feedback</h1>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
          <h2>Statistics</h2>
          <ul>
            <li>{`Good: ${3}`}</li>
            <li>{`Neutral: ${5}`}</li>
            <li>{`Bad: ${2}`}</li>
          </ul>
        </Section>
      </Fragment>
    );
  }
}

export default App;
