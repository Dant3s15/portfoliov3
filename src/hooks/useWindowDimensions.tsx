import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export default function useWindowDimensions() {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  useEffect(() => {
    const handleResize = () => {
      const dimensions = getWindowDimensions();
      setWindowDimensions(dimensions);
      setIsMobile(dimensions.width < 577);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { ...windowDimensions, isMobile };
}
