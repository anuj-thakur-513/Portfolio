import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
    </button>
  );
};

export default ModeToggle;
