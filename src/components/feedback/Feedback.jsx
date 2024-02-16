import style from './Feedback.module.css';

export const Feedback = ({
  feedbackTypes,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <>
      <ul className={style.list}>
        <li className={style.item}>Good: {feedbackTypes.good}</li>
        <li className={style.item}>Neutral: {feedbackTypes.neutral}</li>
        <li className={style.item}>Bad: {feedbackTypes.bad}</li>
        <li className={style.item}>Total: {totalFeedback}</li>
        <li className={style.item}>Positive: {positiveFeedback}%</li>
      </ul>
    </>
  );
};
