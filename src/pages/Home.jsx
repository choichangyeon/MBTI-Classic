import { useNavigate } from "react-router-dom";
import { POST_CONTENT, POST_TITLE } from "@data/HomePostCardContent";
import PostCard from "@components/home/PostCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center my-40">
      <div className="flex flex-row justify-evenly">
        <PostCard title={POST_TITLE.TEST_TITLE}>
          {POST_CONTENT.TITLE_CONTENT}
        </PostCard>
        <PostCard title={POST_TITLE.TEST_EFFECT_1}>
          {POST_CONTENT.EFFECT_CONTENT_1}
        </PostCard>
        <PostCard title={POST_TITLE.TEST_EFFECT_2}>
          {POST_CONTENT.EFFECT_CONTENT_2}
        </PostCard>
      </div>
      <div className="flex my-20 justify-center">
        <button
          onClick={() => {
            navigate("/test");
          }}
          className="h-sm w-lg transition duration-300 shadow-lg hover:text-white hover:border-indigo-300 hover:bg-indigo-300 border-2 rounded-md"
        >
          테스트하러 가기
        </button>
      </div>
    </div>
  );
};

export default Home;
