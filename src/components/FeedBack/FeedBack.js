import { Component } from 'react';
import css from './FeedBack.module.css';
import Statistics from '../Statistics/Statistics';

class FeedBack extends Component {
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

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css['feedback']}>
        <h1>Please leave feedback!</h1>
        <div className={css['feedback__buttons-container']}>
          <button
            onClick={() => this.handleClick('good')}
            className={css['feedback__btn--good']}
          >
            Good🙂
          </button>
          <button
            onClick={() => this.handleClick('neutral')}
            className={css['feedback__btn--neutral']}
          >
            Neutral😐
          </button>
          <button
            onClick={() => this.handleClick('bad')}
            className={css['feedback__btn--bad']}
          >
            Bad🙁
          </button>
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}

export default FeedBack;
