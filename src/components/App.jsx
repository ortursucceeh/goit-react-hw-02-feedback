import { Component } from "react";
import css from './App.module.css'

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = value => {
    this.setState(prevState => ({ [value]: (prevState[value] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, number) => total + number,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback(), 2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log('Object.keys(this.state) :>> ', Object.keys(this.state));

    return (
      <div className={css['app']}>
        <Section title='Please leave feedback!'>
          <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title='Statistics'>
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        </Section>
      </div>
    );
  }
};

export default App;