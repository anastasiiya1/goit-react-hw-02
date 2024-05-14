import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

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
    if (feedbackType === "") {
      setFeedback(startFeedback);
    } else {
      setFeedback((previousState) => ({
        ...previousState,
        [feedbackType]: previousState[feedbackType] + 1,
      }));
    }
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
      
      <Options onUpdateFeedback={updateFeedback} />

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