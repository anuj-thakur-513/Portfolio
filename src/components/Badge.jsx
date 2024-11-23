const Badge = ({ text, isHover = false }) => {
  return (
    <span
      className={`text-xs bg-gray-700 text-white px-1 py-1 rounded cursor-default ${
        isHover ? "hover:scale-105 duration-150" : ""
      }`}
    >
      {text}
    </span>
  );
};

export default Badge;
