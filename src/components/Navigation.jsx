import ModeToggle from "./ModeToggle";

const Navigation = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-center items-center">
      <div className="flex gap-5 justify-end w-full max-w-3xl pr-10">
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          about
        </button>
        <button
          onClick={() => scrollToSection("work-experience")}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          work experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          projects
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          skills
        </button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
