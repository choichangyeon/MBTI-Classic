const PostCard = ({ title, children }) => {
  return (
    <div className="flex flex-col h-lg w-50 border">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};

export default PostCard;
