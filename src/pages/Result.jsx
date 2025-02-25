import { useState, useEffect } from "react";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "@api/testResults";
import ResultCard from "@components/result/ResultCard";
import Swal from "sweetalert2";
import useUserStore from "@/app/userStore";
import TestButton from "@components/common/TestButton";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [testResults, setTestResults] = useState([]);
  const { userData } = useUserStore();

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const results = await getTestResults();
        setTestResults(results);
      } catch (e) {
        Swal.fire(`페이지 오류 - ${e}`, "새로고침 부탁드립니다!", "warning");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestResults();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        icon: "warning",
        title: "결과 삭제 확인",
        text: "테스트 결과를 삭제하시겠습니까?",
        showCancelButton: true,
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        confirmButtonColor: "#a5b4fc",
        cancelButtonColor: "#fc7531",
      });

      if (result.isConfirmed) {
        const { nickname } = await deleteTestResult(id);
        setTestResults((prev) => prev.filter((result) => result.id !== id));
        await Swal.fire({
          title: "삭제 완료",
          text: `${nickname}님의 테스트 결과를 삭제했습니다.`,
          icon: "success",
          confirmButtonColor: "#a5b4fc",
        });
      }
    } catch (e) {
      Swal.fire({
        title: "삭제 오류",
        text: e.response.data.message,
        icon: "error",
        confirmButtonColor: "#a5b4fc",
      });
    }
  };

  const handleVisibility = async (id, visibility) => {
    try {
      const confirmResult = await Swal.fire({
        icon: "warning",
        title: visibility ? "비공개 확인" : "공개 확인",
        text: visibility
          ? "테스트 결과를 비공개 처리하시겠습니까?"
          : "테스트 결과를 공개 처리하시겠습니까?",
        showCancelButton: true,
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        confirmButtonColor: "#a5b4fc",
        cancelButtonColor: "#fc7531",
      });

      if (confirmResult.isConfirmed) {
        const { nickname } = await updateTestResultVisibility(id, !visibility);

        setTestResults((prev) =>
          prev.map((result) =>
            result.id === id ? { ...result, visibility: !visibility } : result
          )
        );

        await Swal.fire({
          title: visibility ? "비공개 처리 완료" : "공개 처리 완료",
          text: `${nickname}님의 테스트 결과를 ${
            visibility ? "비공개" : "공개"
          } 처리했습니다.`,
          icon: "success",
          confirmButtonColor: "#a5b4fc",
        });
      }
    } catch (e) {
      await Swal.fire({
        title: visibility ? "비공개 처리 오류" : "공개 처리 오류",
        text: e.response?.data?.message || e.message,
        icon: "error",
        confirmButtonColor: "#a5b4fc",
      });
    }
  };

  if (isLoading) {
    return <div>데이터를 불러오는 중...</div>;
  }
  return (
    <div className="col-base center-base pt-10">
      <TestButton />
      {testResults.map((result) => {
        if (result.userId !== userData.userId && !result.visibility) {
          return null;
        }
        return (
          <ResultCard
            key={result.id}
            content={result}
            onDelete={handleDelete}
            onChangeVisibility={handleVisibility}
          />
        );
      })}
    </div>
  );
};

export default Result;
