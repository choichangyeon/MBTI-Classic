import { useState, useEffect } from "react";
import { getTestResults } from "@api/testResults";
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

  console.log(testResults);

  if (isLoading) {
    return <div>데이터를 불러오는 중...</div>;
  }
  return (
    <div className="col-base center-base pt-10">
      {testResults.map((result) => (
        <ResultCard key={result.id} content={result} />
      ))}
    </div>
  );
};

export default Result;
