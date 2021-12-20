import React, { Component, Fragment } from 'react';
import 'normalize.css';
import './App.css';
import Section from './components/Section/Section';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  addFeedback = e => {
    switch (e.target.textContent) {
      case 'Good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'Neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'Bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        console.log('Invalid subscription type');
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Fragment>
        <Section>
          <h1>Please leave feedback</h1>
          {/* <FeedbackOptions options={} onLeaveFeedback={} /> */}
          <button
            type="button"
            onClick={е => {
              this.addFeedback(е);
            }}
          >
            Good
          </button>
          <button type="button" onClick={this.addFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.addFeedback}>
            Bad
          </button>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Fragment>
    );
  }
}

export default App;
