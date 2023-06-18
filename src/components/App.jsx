import {  useState } from "react";
import css from './App.module.css'

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

const  App = () =>  {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleClick = value => {
    setFeedback(prev => ({ ...prev, [value]: (prev[value] += 1) }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce(
      (total, number) => total + number,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good * 100) / countTotalFeedback(), 2);
  };

  const { good, neutral, bad } = feedback;

  return (
    <div className={css['app']}>
      <Section title='Please leave feedback!'>
        <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title='Statistics'>
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
      </Section>
    </div>
  );
};

export default App;
