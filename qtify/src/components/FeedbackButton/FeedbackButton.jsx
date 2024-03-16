import React from "react";
import styles from "./FeedbackButton.module.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const FeedbackButton = () => {
  const handleForm = () => {
    console.log("clicked");
  };

  return (
    <>
      <button
        className={styles.feedbackbutton}
        onClick={handleForm}
        type="submit"
      >
        Give Feedback
      </button>
    </>
  );
};

export default FeedbackButton;
