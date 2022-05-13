import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);

  return (
    <>
      <Header />
      <FeedBackList feedback={feedback} />
    </>
  );
}
export default App;
