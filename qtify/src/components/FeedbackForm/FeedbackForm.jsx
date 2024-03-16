import React, { useState } from "react";

// FeedbackForm component
const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback..."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
