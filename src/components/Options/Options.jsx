import css from "./Options.module.css";

const Options = ({onClick, children, feedbackType}) => {
  return (
    <>
      <button className={css.button} onClick={() => onClick(feedbackType)}>{children} </button>
    </>
  );
};

export default Options;
