const PostCard = ({ title, children }) => {
  return (
    <div className="flex flex-wrap flex-col w-xl h-xl cursor-pointer shadow-lg hover:-translate-y-4 transition duration-300 border rounded-md px-4 bg-amber-50">
      <h1 className="font-bold text-xl my-6">{title}</h1>
      <p>{children}</p>
    </div>
  );
};

export default PostCard;
