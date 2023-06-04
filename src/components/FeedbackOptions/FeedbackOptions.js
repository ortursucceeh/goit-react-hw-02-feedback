import { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={css['feedback__buttons-container']}>
        {options.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => onLeaveFeedback(item)}
              className={css[`feedback__btn--${item}`]}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
