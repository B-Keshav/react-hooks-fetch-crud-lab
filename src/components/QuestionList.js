import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDeleteQuesion, handleChangeAnswer }) {
  const renderedQuestions = questions.map((question) => {
    return <QuestionItem
      key={question.id}
      question={question}
      handleDeleteQuesion={handleDeleteQuesion}
      handleChangeAnswer={handleChangeAnswer}
    />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{renderedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
