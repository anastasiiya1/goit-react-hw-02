import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import clsx from "clsx";
import "./App.css";
import { PiSmileyLight } from "react-icons/pi";
import { PiSmileyMehLight } from "react-icons/pi";
import { PiSmileySad } from "react-icons/pi";
import { RxReset } from "react-icons/rx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
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

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  const isActive = totalFeedback > 0;
  const feedbackState = clsx(!isActive ? "hide" : "show");

  return (
    <>
      <Description />
      <div>
        <Options onClick={() => updateFeedback("good")}>Good <PiSmileyLight /></Options>
        <Options onClick={() => updateFeedback("neutral")}>Neutral <PiSmileyMehLight /></Options>
        <Options onClick={() => updateFeedback("bad")}>Bad <PiSmileySad /></Options>

        {isActive && (
          <Options onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}>
            Reset <RxReset />
          </Options>
        )}
      </div>

      {!isActive && <Notification />}

      {isActive && (
        <div >
          <Feedback>Good: {good}</Feedback>
          <Feedback>Neutral: {neutral}</Feedback>
          <Feedback>Bad: {bad}</Feedback>

          <Feedback className={feedbackState}>Total: {totalFeedback}</Feedback>
          <Feedback>Positive: {Math.round((good / totalFeedback) * 100)}%</Feedback>
        </div>
      )}
    </>
  );
}

export default App;
