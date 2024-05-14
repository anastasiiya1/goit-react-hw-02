import PropTypes from 'prop-types';
import css from "./Options.module.css";

const Options = ({onClick, children, feedbackType}) => {
  return (
    <>
      <button className={css.button} onClick={() => onClick(feedbackType)}>{children} </button>
    </>
  );
};

Options.propTypes = {
  onClick: PropTypes.func,
  feedbackType: PropTypes.string,
  children: PropTypes.node,
}

export default Options;
