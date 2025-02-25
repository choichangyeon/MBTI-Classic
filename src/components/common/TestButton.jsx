import { useNavigate } from "react-router-dom";

const TestButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex my-10 justify-center">
      <button
        onClick={() => {
          navigate("/test");
        }}
        className="btn-base h-sm w-lg shadow-lg border-2 "
      >
        테스트하러 가기
      </button>
    </div>
  );
};

export default TestButton;
