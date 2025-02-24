import { useState, useEffect } from "react";
import { deleteTestResult, getTestResults } from "@api/testResults";
import ResultCard from "@components/result/ResultCard";

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
      const { nickname } = await deleteTestResult(id);
      setTestResults((prev) => prev.filter((result) => result.id !== id));
      alert(`${nickname}의 글이 삭제됐습니다.`);
    } catch (e) {
      console.error(e);
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
