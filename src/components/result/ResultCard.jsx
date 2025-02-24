import { MBTI_Descriptions } from "@/data/MBTIDescriptions";

const ResultCard = ({ content }) => {
  const { id, userId, result, visibility } = content;
  return (
    <div className="col-base w-3/4 h-xl cursor-pointer shadow-lg hover:-translate-y-4 transition duration-300 border rounded-md px-4 bg-amber-50">
      <h1>{result}</h1>
      <p>{MBTI_Descriptions[result]}</p>
    </div>
  );
};

export default ResultCard;
