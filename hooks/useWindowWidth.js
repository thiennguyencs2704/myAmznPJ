import { useEffect, useState } from "react";

const useWindowWidth = (screenWidth) => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handlerResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  if (windowWidth) return windowWidth;
  if (!windowWidth) return screenWidth;
};

export default useWindowWidth;
