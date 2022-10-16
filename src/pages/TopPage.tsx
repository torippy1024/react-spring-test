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
  
  const [open, toggle] = useState(false);
  const barProps = useSpring({
    width: open ? `${Math.random() * 100}%` : "0%",
  });
  
  const [zoom, setZoom] = useState(true);
  const {zoomX} = useSpring({
    from: {zoomX: 0},
    zoomX: zoom ? 1 : 0,
    config: {duration: 1000},
  });

  return  (
    <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div ref={fieldRef} className="grow container mx-auto my-4 bg-base-200 overflow-hidden">
        <animated.div
          className="w-12 h-12 bg-primary rounded-full flex justify-center items-center text-base-100 cursor-pointer"
          style={springs}
          onClick={handleClick}
        >
          {count}
        </animated.div>

        <animated.div>
          {number.to(n => n.toFixed(2))}
        </animated.div>

        <div className="w-32 h-6 border border-black relative cursor-pointer" onClick={() => toggle(!open)}>
          <animated.div className="absolute h-full w-full bg-secondary" style={barProps} />
          <animated.div className="absolute h-full w-full text-center select-none">
            {barProps.width.to(x => `${Number(x.split("%")[0]).toFixed(0)}%`)}
          </animated.div>
        </div>

        <div className="flex justify-center items-center">
          <animated.div
            className="cursor-pointer"
            style={{
              opacity: zoomX.to({range: [0, 1], output: [0.3, 1]}),
              scale: zoomX.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 2],
              })
            }}
            onClick={() => setZoom(!zoom)}
          >
            click
          </animated.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;