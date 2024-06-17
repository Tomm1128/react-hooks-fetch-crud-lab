import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionList, setQuestionList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQuestionList(data))
  })

  const questionListItems = questionList.map(question => {
    return <QuestionItem question={question}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionListItems}</ul>
    </section>
  );
}

export default QuestionList;
