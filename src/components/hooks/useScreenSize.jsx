"use client";

import { useEffect, useState } from "react";

export default useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
