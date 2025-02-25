import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestForm from "@components/test/TestForm";
import { calculateMBTI } from "@utils/mbtiCalculator";
import { MBTI_Descriptions } from "@data/MBTIDescriptions";
import { createTestResult } from "@api/testResults";
import useUserStore from "@/app/userStore";
import Swal from "sweetalert2";

const Test = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const userData = useUserStore((state) => state.userData);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    await Swal.fire({
      title: "테스트 완료",
      text: `${userData.nickname}님의 테스트가 완료됐습니다.`,
      icon: "success",
      confirmButtonColor: "#a5b4fc",
    });
    setResult(mbtiResult);
    await createTestResult({
      userId: userData.userId,
      nickname: userData.nickname,
      result: mbtiResult,
      visibility: true,
    });
  };

  const handleNavigateToResults = () => {
    navigate("/result");
  };

  return (
    <div className="col-base center-base w-full  bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-center text-3xl mt-5 font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <div className="col-base center-base pt-5 w-full h-96">
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {MBTI_Descriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="btn-base w-full py-3 font-semibold"
            >
              결과 페이지로 이동하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
