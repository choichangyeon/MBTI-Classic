import { useNavigate } from "react-router-dom";
import { POST_CONTENT, POST_TITLE } from "@data/HomePostCardContent";
import PostCard from "@components/home/PostCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="col-base justify-center my-20 w-full">
      <div className="pb-20">
        <p className="font-bold text-center text-5xl">Classic MBTI</p>
      </div>
      <div className="row-base justify-evenly">
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
          className="btn-base h-sm w-lg shadow-lg border-2 "
        >
          테스트하러 가기
        </button>
      </div>
    </div>
  );
};

export default Home;
