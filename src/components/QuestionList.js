import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionList}) {

  const questionListItems = questionList.map(question => {
    return <QuestionItem key={question.id} question={question}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionListItems}</ul>
    </section>
  );
}

export default QuestionList;
