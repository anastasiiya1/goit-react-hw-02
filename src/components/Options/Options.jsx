import PropTypes from 'prop-types';
import { PiSmileyLight } from "react-icons/pi";
import { PiSmileyMehLight } from "react-icons/pi";
import { PiSmileySad } from "react-icons/pi";
import { RxReset } from "react-icons/rx";
import css from "./Options.module.css";

const Options = ({ onClick, feedbackType, totalFeedback }) => {
  return (
    <>
      {feedbackType === "good" && (<button className={css.button} onClick={() => onClick(feedbackType)}>
        Good <PiSmileyLight />
      </button>)}
      {feedbackType === "neutral" && (<button className={css.button} onClick={() => onClick(feedbackType)}>
        Neutral <PiSmileyMehLight /></button>)}
      {feedbackType === "bad" && (<button className={css.button} onClick={() => onClick(feedbackType)}>
        Bad <PiSmileySad/>
      </button>)}
      {feedbackType === "reset" && totalFeedback > 0 && (<button className={css.button} onClick={onClick}>
        Reset <RxReset />
      </button>)}
    </>
  );
};

Options.propTypes = {
  feedbackType: PropTypes.string,
  onClick: PropTypes.func,
  totalFeedback: PropTypes.number,
}

export default Options;
