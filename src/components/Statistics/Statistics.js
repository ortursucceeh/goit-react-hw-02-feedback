import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (!total) return <Notification message="No feedback given👁‍🗨" />;

  return (
    <div className={css['statistics']}>
      <div className={css['statistics__values-container']}>
        <div>🙂Good: {good}</div>
        <div>😐Neutral: {neutral}</div>
        <div>🙁Bad: {bad}</div>
        <div>💬Total: {total}</div>
        <div>✅Positive feedback: {positivePercentage}%</div>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
