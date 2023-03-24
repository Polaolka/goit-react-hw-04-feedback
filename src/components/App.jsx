import { useState } from 'react';
import css from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

const OPTIONS = ["good", "neutral", "bad"];

export const App = () => {
const [ good, setGood ] = useState(0);
const [ neutral, setNeutral ] = useState(0);
const [ bad, setBad ] = useState(0);

const onLeaveFeedback = event => {
  switch (event.target.name) {
      case "good":
          setGood(s => s + 1);
          break;
      case "neutral":
          setNeutral(s => s + 1);
          break;
      case "bad":
          setBad(s => s +1);
          break;
      default:
          return;
  };
};

const total = good + neutral + bad;
const percent = Math.round((good * 100) / total);

return (
  <div>
    <Section title="Please leave feedback">
      <ul className={css.buttonWrapper}>
        <FeedbackOptions
          options={OPTIONS}
          onLeaveFeedback={onLeaveFeedback}
        />
      </ul>
    </Section>
    <Section title="Statistics">
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percent={percent}
        />
      ) : (
        <Notification/>
      )}
    </Section>
  </div>
);
}