import { useState, useEffect } from 'react';
import '../node_modules/modern-normalize/modern-normalize.css';
import './App.css';
import { Description } from './components/description/Description';
import { Feedback } from './components/feedback/Feedback';
import { Option } from './components/options/Options';
import { Notification } from './components/notification/Notification';

export const App = () => {
  const initialFeedbackTypes = JSON.parse(
    localStorage.getItem('feedbackTypes')
  ) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedbackTypes);
  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedback =
    totalFeedback > 0
      ? Math.round(
          ((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100
        )
      : 0;

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
