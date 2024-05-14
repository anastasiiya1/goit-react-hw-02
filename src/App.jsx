import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";
import { PiSmileyLight } from "react-icons/pi";
import { PiSmileyMehLight } from "react-icons/pi";
import { PiSmileySad } from "react-icons/pi";
import { RxReset } from "react-icons/rx";

function App() {
  const startFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return startFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback((previousState) => ({
      ...previousState,
      [feedbackType]: previousState[feedbackType] + 1,
    }));
  }

  function handleReset() {
    setFeedback(startFeedback);
  }

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  const isActive = totalFeedback > 0;
  const positivePercent = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      
      <Options onClick={updateFeedback} feedbackType="good">
        Good <PiSmileyLight />
      </Options>
      <Options onClick={updateFeedback} feedbackType="neutral">
        Neutral <PiSmileyMehLight />
      </Options>
      <Options onClick={updateFeedback} feedbackType="bad">
        Bad <PiSmileySad />
      </Options>

      {isActive && (
        <Options onClick={handleReset}>
          Reset <RxReset />
        </Options>
      )}

      {!isActive && <Notification />}

      {isActive && (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercent={positivePercent}
        />
      )}
    </>
  );
}

export default App;
