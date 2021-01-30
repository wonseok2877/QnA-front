import React, { createContext, useState } from "react";

export const QnAContext = createContext();

export const QnAContextProvider = (props) => {
  const [question, setQ] = useState([]);
  const [questionId, setQID] = useState([]);
  const [answer, setA] = useState("");
  const [globalName, setG] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState(localStorage.getItem("user"));
  const [history, setHistory] = useState([]);

  return (
    <QnAContext.Provider
      value={{
        question,
        setQ,
        answer,
        setA,
        questionId,
        setQID,
        globalName,
        setG,
        history,
        setHistory,
        name,
        setName,
        username,
        setUserName,
      }}
    >
      {/* ? 설명 필요 */}
      {props.children}
    </QnAContext.Provider>
  );
};
