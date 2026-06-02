import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero bg-base-200 rounded-3xl p-10 lg:p-20 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-24">
        <img
          src={heroImg}
          className="max-w-xs md:max-w-sm rounded-lg"
          alt="Hero"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Books to freshen up <br className="hidden lg:block" /> your bookshelf
          </h1>
          <div className="mt-10">
            <Link
              to="/listed-books"
              className="btn btn-primary text-white font-bold px-8 text-lg"
            >
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
