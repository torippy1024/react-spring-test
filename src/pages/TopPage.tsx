import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  const [count, setCount] = useState(0);

  const [springs, api] = useSpring(() => ({
    from: {x: 0, y: 0},
  }));

  const handleClick = () => {
    setCount(count + 1);
    api.start({
      to: {x: Math.random() * 500, y: Math.random() * 500},
    });
  };

  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 p-4 bg-base-200">
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