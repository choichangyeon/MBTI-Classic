import useUserStore from "@/app/userStore";
import { MBTI_Descriptions } from "@/data/MBTIDescriptions";

const ResultCard = ({ content }) => {
  const { userId, result, visibility, nickname } = content;
  const userData = useUserStore((state) => state.userData);
  const isAuthor = userId === userData.userId;
  return (
    <div className="col-base w-3/5 h-52 cursor-pointer shadow-lg hover:-translate-y-2 transition duration-300 border rounded-md my-5 py-5 px-4 bg-amber-50">
      <h1 className="text-lg font-bold mb-1">
        {result} - {nickname}
      </h1>
      <p className="line-clamp-4">{MBTI_Descriptions[result]}</p>
      {isAuthor ? (
        <div className="row-base justify-end">
          <button className="btn-base bg-indigo-300 hover:bg-red-600 text-white w-sm h-xs mx-2">
            삭제
          </button>
          {/* <button>비공개</button> */}
        </div>
      ) : null}
    </div>
  );
};

export default ResultCard;
