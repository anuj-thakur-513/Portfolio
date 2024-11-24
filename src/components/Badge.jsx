// eslint-disable-next-line react/prop-types
const Badge = ({ text, isHover = false }) => {
  return (
    <span
      className={`text-xs bg-gray-700 text-white px-1 py-1 rounded cursor-default ${
        isHover ? "hover:bg-gray-600 duration-150" : ""
      }`}
    >
      {text}
    </span>
  );
};

export default Badge;
