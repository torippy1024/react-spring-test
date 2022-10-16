import { useSpring, animated, config } from "@react-spring/web";
import { useState } from "react";
import useMeasure from "react-use-measure";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  const [count, setCount] = useState(0);
  const [fieldRef, {width, height}] = useMeasure();
  const ballSize = 12 * 4;

  const [springs, api] = useSpring(() => ({
    from: {x: 0, y: 0},
  }));

  const handleClick = () => {
    setCount(count + 1);
    api.start({
      to: {x: Math.random() * (width - ballSize), y: Math.random() * (height - ballSize)},
    });
  };

  const [flip, setFlip] = useState(false)
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip),
  })

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
        <animated.div>
          {number.to(n => n.toFixed(2))}
        </animated.div>
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;