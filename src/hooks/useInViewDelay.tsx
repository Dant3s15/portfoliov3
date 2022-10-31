import { useEffect, useState } from "react";

type Props = {
  inView: boolean;
};

export default function useInViewDelay({ inView }: Props) {
  const [inViewDelay, setInViewDelay] = useState(inView);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!inView) {
      timeout = setTimeout(() => {
        setInViewDelay(inView);
      }, 1000);
    } else setInViewDelay(inView);
    return () => {
      clearTimeout(timeout);
    };
  }, [inView]);

  return [inViewDelay, setInViewDelay];
}
