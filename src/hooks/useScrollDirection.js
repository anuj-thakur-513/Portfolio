import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setIsScrollingUp(newScrollY < scrollY);
      setScrollY(newScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return isScrollingUp;
};

export default useScrollDirection;
