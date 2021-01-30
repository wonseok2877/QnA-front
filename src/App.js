import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerBox from "./AnswerBox";
import UserBox from "./UserBox";
import { QnAContextProvider } from "./context/Finder";

const App = () => {
  return (
    <QnAContextProvider>
      <div className="container">
        <UserBox />
        <QuestionBox />
        <AnswerBox />
      </div>
    </QnAContextProvider>
  );
};

export default App;
