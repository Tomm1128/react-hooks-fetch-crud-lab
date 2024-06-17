import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQuestionList(data))
  }, [])

  const handleUpdateQuestions = (newQuestion) => {
    setQuestionList([...questionList, newQuestion])
  }

  const deleteQuestion = (deletedId) => {
    const updatedQuestions = questionList.filter(question => question.id !== deletedId)
    setQuestionList(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
        <QuestionForm onQuestionSubmit={handleUpdateQuestions} /> :
        <QuestionList questionList={questionList} onDelete={deleteQuestion}/>
      }
    </main>
  );
}

export default App;
