import PropTypes from 'prop-types';
import { useState } from "react";
import css from "./Options.module.css";
import { PiSmileyLight } from "react-icons/pi";
import { PiSmileyMehLight } from "react-icons/pi";
import { PiSmileySad } from "react-icons/pi";
import { RxReset } from "react-icons/rx";

const Options = ({ onUpdateFeedback }) => {
  const [feedbackType, setFeedbackType] = useState("");

  const handleUpdateFeedback = (type) => {
    setFeedbackType(type);
    onUpdateFeedback(type);
  };

  return (
    <>
      <button className={css.button} onClick={() => handleUpdateFeedback("good")}>
        Good <PiSmileyLight />
      </button>
      <button className={css.button} onClick={() => handleUpdateFeedback("neutral")}>
        Neutral <PiSmileyMehLight />
      </button>
      <button className={css.button} onClick={() => handleUpdateFeedback("bad")}>
        Bad <PiSmileySad />
      </button>
      {feedbackType !== "" && (
        <button className={css.button} onClick={() => handleUpdateFeedback("")}>
          Reset <RxReset />
        </button>
      )}
    </>
  );
};

Options.propTypes = {
  onUpdateFeedback: PropTypes.func.isRequired,
};

export default Options;