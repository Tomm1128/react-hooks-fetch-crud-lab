import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionList, onDelete, onAnswerUpdate}) {

  const questionListItems = questionList.map(question => {
    return <QuestionItem
      key={question.id}
      question={question}
      onDelete={onDelete}
      onAnswerUpdate={onAnswerUpdate}
    />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionListItems}</ul>
    </section>
  );
}

export default QuestionList;
