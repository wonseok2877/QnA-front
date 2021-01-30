import React, { useContext, useEffect, useState } from "react";
import { QnAContext } from "./context/Finder";

const AnswerBox = () => {
  // const { question, setQ } = useContext(QnAContext);
  const { answer, setA } = useContext(QnAContext);
  const { questionId, setQID } = useContext(QnAContext);
  const {globalName, setG} = useContext(QnAContext);
  // const {history, setHistory} = useContext(QnAContext);
  const [history, setHistory] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://shjeon-qna.herokuapp.com/question/answer/${questionId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            result: answer,
            user:globalName
          }),
        }
      );
      // console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  // console.log(answer);

   const handleClick=async()=>{
    const response = await fetch(`https://shjeon-qna.herokuapp.com/question/all-answer/${globalName}`);

    const jsonData = await response.json();
    console.log(jsonData);

    setHistory(jsonData)
  }


console.log(history);
// console.log(history.list);
// console.log(history.list[0].id)
//     setResult(history.list[0].result)
//     setListQ(history.list[0].question.contents)
  return (
    <div className="bg-secondary">
      <h3>저장될 질문 id : {questionId}</h3>
      {globalName ?
      <>
      <form className="d-flex mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={answer}
          onChange={(e) => setA(e.target.value)}
        ></input>
        <button className="btn btn-primary ">제출</button>
      </form>
        <button onClick={handleClick}>불러오기</button>
        {history ?
        history.list.map((h,index)=>{return(
          <div key={index}>
          <p>{h.id}</p>
          <p>{h.question.contents}</p>
          <p>{h.result}</p>
          </div>
      )})
      : <div>아닙니다</div> }
        </>
      : <div>이름을 입력해주세요</div>}
      {/* {history.list[0] ?
    history.list.map(h=>{
        <>
        <p>{h.id}</p>
        <p>{h.question.contents}</p>
        <p>{h.result}</p>
        </>
    })
      : <h4>no answer history</h4>} */}
    </div>
  );
};

export default AnswerBox;
