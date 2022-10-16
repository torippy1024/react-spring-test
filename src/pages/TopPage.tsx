import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  const springs = useSpring({
    from: {x: 0},
    to: {x: 100},
  });
  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4 bg-base-200">
        <animated.div
          className="w-12 h-12 bg-primary rounded-full"
          style={springs}
        />
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;