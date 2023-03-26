import React, { useLayoutEffect, useRef, useState } from "react";

type Props = {
  styling: string;
  children: React.ReactNode;
};

const AnimateOnScrollObserver = ({ styling, children }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const thresholdArray = () => {
    const threshold = [];

    for (let i = 0; i <= 1; i += 0.1) threshold.push(i);
    return threshold;
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: thresholdArray() }
    );
    observer.observe(ref.current!);
  }, [setVisible]);

  return (
    <div ref={ref} className={`${visible ? styling : null}`}>
      {children}
    </div>
  );
};

export default AnimateOnScrollObserver;
