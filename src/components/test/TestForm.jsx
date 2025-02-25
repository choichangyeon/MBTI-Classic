import { useState } from "react";
import { questions } from "@data/Questions";
import Swal from "sweetalert2";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      icon: "info",
      title: "테스트 완료 확인",
      text: "테스트를 완료 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오",
      confirmButtonColor: "#a5b4fc",
      cancelButtonColor: "#fc7531",
    });

    if (result.isConfirmed) {
      onSubmit(answers);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="col-base center-base space-y-6 p-6 bg-white rounded-lg"
    >
      {questions.map((q, index) => (
        <div
          key={q.id}
          className="border col-base max-w-screen-sm w-2/3 h-50 shadow-lg rounded-md my-5 py-5 px-4 mb-6"
        >
          <p className="font-semibold text-lg mb-3 line-clamp-2">
            {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer truncate transition-colors duration-300 ${
                  answers[index]?.answer === option
                    ? "bg-indigo-300 text-white"
                    : ""
                } hover:bg-indigo-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2 text-primary-color"
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="btn-base max-w-screen-sm w-2/3 py-3 font-semibold "
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
