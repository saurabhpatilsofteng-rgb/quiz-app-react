import React, {
  useState,
} from "react";

const QuizSection = ({
  mcqs,
  onQuizComplete,
}) => {

  const [score, setScore] =
    useState(0);

  const [submitted,
    setSubmitted] =
    useState(false);

  const handleAnswer =
    (answer, correct) => {

    if(answer === correct){
      setScore((prev)=>prev+1);
    }
  };

  const submitQuiz = () => {

    setSubmitted(true);

    if(onQuizComplete){
      onQuizComplete(score);
    }
  };

  return (
    <div className="quiz-card">

      <h2>Quiz</h2>

      {mcqs?.map((mcq,index)=>(
        <div
          key={index}
          className="question"
        >
          <p>
            {mcq.question}
          </p>

          {mcq.options.map(
            (option,i)=>(
              <div key={i}>
                <input
                  type="radio"
                  name={`q${index}`}
                  onChange={() =>
                    handleAnswer(
                      option,
                      mcq.answer
                    )
                  }
                />

                {option}
              </div>
            )
          )}
        </div>
      ))}

      {!submitted && (
        <button
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>
      )}

      {submitted && (
        <h3>
          Score :
          {score} / {mcqs.length}
        </h3>
      )}

    </div>
  );
};

export default QuizSection;