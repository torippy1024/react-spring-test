import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const fieldRef = useRef<HTMLDivElement>(null);
  const ballSize = 12 * 4;

  useEffect(() => {
    setWidth(fieldRef.current?.clientWidth ?? width);
    setHeight(fieldRef.current?.clientHeight ?? height);
  });

  const [springs, api] = useSpring(() => ({
    from: {x: 0, y: 0},
  }));

  const handleClick = () => {
    setCount(count + 1);
    api.start({
      to: {x: Math.random() * (width - ballSize), y: Math.random() * (height - ballSize)},
    });
  };

  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div ref={fieldRef} className="grow container mx-auto my-4 bg-base-200">
        <animated.div
          className="w-12 h-12 bg-primary rounded-full flex justify-center items-center text-base-100"
          style={springs}
          onClick={handleClick}
        >
          {count}
        </animated.div>
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;