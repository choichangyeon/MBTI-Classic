const InputForm = ({ ...props }) => {
  return (
    <input
      className="h-sm border focus:outline-none focus:border-indigo-300 rounded-lg my-2 px-2"
      {...props}
    />
  );
};

export default InputForm;
