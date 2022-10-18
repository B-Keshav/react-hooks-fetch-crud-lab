import React from "react";

function QuestionItem({ question, handleDeleteQuesion, handleChangeAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function onDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => handleDeleteQuesion(question))
  }

  function onCorrectIndexChange(e){
    //console.log(e.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method : "PATCH",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        correctIndex : e.target.value
      })
    })
    .then(res => res.json())
    .then(data => handleChangeAnswer(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={onCorrectIndexChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
