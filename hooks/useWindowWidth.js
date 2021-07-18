import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    const handlerResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
