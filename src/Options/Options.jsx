import css from "./Options.module.css";

const Options = ({onClick, children}) => {
  return (
    <>
      <button className={css.button} onClick={onClick}>{children} </button>
    </>
  );
};

export default Options;
