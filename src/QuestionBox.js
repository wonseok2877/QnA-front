import React, { useContext, useEffect, useState } from "react";
import { QnAContext } from "./context/Finder";

const QuestionBox = () => {
  /* 로컬 state 였던 것
  const [question, setQ] = useState([]);*/

  const { question, setQ } = useContext(QnAContext);
  const { questionId, setQID } = useContext(QnAContext);

  const getQuestion = async () => {
    const response = await fetch(
      "https://shjeon-qna.herokuapp.com/question/random"
    );
    // console.log(response);
    // const jsonData = JSON.stringify(response);
    const jsonData = await response.json();
    // console.log(jsonData.question.contents);

    setQ(jsonData.question.contents);
    // console.log(question);
    setQID(jsonData.question.id);
  };
  useEffect(() => {
    getQuestion();
  }, []);

  const checkingId = (a) => {
    if (a) {
      return <h2>ok random question 😆</h2>;
    } else {
      return <h2>not ok... 😢</h2>;
    }
  };

  return (
    <div className="bg-primary">
      {checkingId(questionId)}
      <h2>{questionId}</h2>
      <h1 className="text-warning">{question}</h1>
    </div>
  );
};

export default QuestionBox;
