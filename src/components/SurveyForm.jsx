import React, { useState, useEffect } from "react";

const SurveyForm = ({ showConfirmationDialog }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem("surveyAnswers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  const questions = [
    {
      id: 1,
      text: "How satisfied are you with our products?",
      type: "rating",
      scale: 5,
    },
    {
      id: 2,
      text: "How fair are the prices compared to similar retailers?",
      type: "rating",
      scale: 5,
    },
    {
      id: 3,
      text: "How satisfied are you with the value for money of your purchase?",
      type: "rating",
      scale: 5,
    },
    {
      id: 4,
      text: "On a scale of 1-10, how would you recommend us to your friends and family?",
      type: "rating",
      scale: 10,
    },
    { id: 5, text: "What could we do to improve our service?", type: "text" },
  ];

  const totalQuestions = questions.length;

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      showConfirmationDialog();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerChange = (questionId, answer) => {
    const updatedAnswers = { ...answers, [questionId]: answer };
    setAnswers(updatedAnswers);

    localStorage.setItem("surveyAnswers", JSON.stringify(updatedAnswers));
  };

  useEffect(() => {
    const savedAnswers = localStorage.getItem("surveyAnswers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-teal-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-center text-2xl font-bold mb-4">Customer Survey</h2>

        <div className="question-number text-right text-lg">
           {currentQuestionIndex + 1}/{totalQuestions}
        </div>
        <div className="question-text text-center my-4 text-lg">
          {questions[currentQuestionIndex].text}
        </div>

        {questions[currentQuestionIndex].type === "rating" && (
          <div className="rating-options flex justify-center space-x-4">
            {[...Array(questions[currentQuestionIndex].scale)].map((_, i) => (
             <button
             key={i}
             className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
               answers[questions[currentQuestionIndex].id] === i + 1
                 ? "bg-red-500 text-white"
                 : "bg-gray-300 text-black"
             }`}
             onClick={() =>
               handleAnswerChange(questions[currentQuestionIndex].id, i + 1)
             }
           >
             {i + 1}
             </button>
            ))}
          </div>
        )}

        {questions[currentQuestionIndex].type === "text" && (
          <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-md mb-6 resize-none"
            onChange={(e) =>
              handleAnswerChange(
                questions[currentQuestionIndex].id,
                e.target.value
              )
            }
            value={answers[questions[currentQuestionIndex].id] || ""}
            placeholder="Your answer..."
          />
        )}

        <div className="navigation-buttons mt-4 flex justify-between">
          <button
            className="btn bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          >
            Prev
          </button>
          <button
            className="btn bg-pink-500 text-white px-4 py-2 rounded-lg"
            onClick={handleNext}
          >
            {currentQuestionIndex < totalQuestions - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
