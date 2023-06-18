import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonsContainer}>
      {options.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => onLeaveFeedback(item)}
            className={css[`button_${item}`]}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
