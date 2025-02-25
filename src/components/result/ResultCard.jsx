import useUserStore from "@/app/userStore";
import { MBTI_Descriptions } from "@data/MBTIDescriptions";

const ResultCard = ({ content, onDelete }) => {
  const { id, userId, result, visibility, nickname, createAt } = content;
  const userData = useUserStore((state) => state.userData);
  const isAuthor = userId === userData.userId;
  return (
    <div className="col-base min-w-min w-3/5 h-52 cursor-pointer shadow-lg hover:-translate-y-2 transition duration-300 border rounded-md my-5 py-5 px-4 bg-amber-50">
      <div className="row-base items-center justify-between">
        <h1 className="text-lg font-bold mb-1 truncate">
          {result} - {nickname}
        </h1>
        <p className="text-xs text-slate-600 text-right truncate">
          테스트 일자: {createAt}
        </p>
      </div>
      <p className="line-clamp-4">{MBTI_Descriptions[result]}</p>
      {isAuthor ? (
        <div className="row-base justify-end">
          <button
            onClick={() => onDelete(id)}
            className="btn-base bg-indigo-300 hover:bg-red-600 text-white w-sm h-xs mt-2 mx-2"
          >
            삭제
          </button>
          {/* <button>비공개</button> */}
        </div>
      ) : null}
    </div>
  );
};

export default ResultCard;
