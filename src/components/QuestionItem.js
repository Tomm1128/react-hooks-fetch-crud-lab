import React from "react";

function QuestionItem({ question, onDelete, onAnswerUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleAnswerChange = (event) => {
    const newAnswer = Number(event.target.value)

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...question,
        correctIndex: newAnswer
      })
    })
    .then(resp => resp.json())
    .then(updatedQuestion => onAnswerUpdate(updatedQuestion.id, updatedQuestion.correctIndex))
  }

  const handleDelete = () => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then(_resp => onDelete(id))
    .catch(error => alert(error))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
