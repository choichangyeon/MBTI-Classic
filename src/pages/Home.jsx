import { POST_CONTENT, POST_TITLE } from "@/data/HomePostCardContent";
import PostCard from "@components/home/PostCard";

const Home = () => {
  return (
    <div>
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
  );
};

export default Home;
