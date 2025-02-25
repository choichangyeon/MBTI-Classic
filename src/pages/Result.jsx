import { useState, useEffect } from "react";
import { deleteTestResult, getTestResults } from "@api/testResults";
import ResultCard from "@components/result/ResultCard";
import Swal from "sweetalert2";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const results = await getTestResults();
        setTestResults(results);
      } catch (e) {
        console.error(e);
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
      console.error(e);
      Swal.fire({
        title: "삭제 오류",
        text: e.response.data.message,
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
      {testResults.map((result) => (
        <ResultCard key={result.id} content={result} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Result;
