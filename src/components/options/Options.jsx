import style from './Options.module.css';

export const Option = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <>
      <button className={style.btn} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={style.btn} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={style.btn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={style.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </>
  );
};
