import { POST_CONTENT, POST_TITLE } from "@data/HomePostCardContent";
import PostCard from "@components/home/PostCard";
import TestButton from "@components/common/TestButton";

const Home = () => {
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
      <TestButton />
    </div>
  );
};

export default Home;
