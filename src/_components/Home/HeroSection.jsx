import { ArrowRight } from "lucide-react";
import HeroSlider from "./HeroSlider";

const HeroSection = ({ data }) => {
  return (
    <section className="flex flex-col items-start pt-24 md:pt-32 min-h-screen text-white text-left px-8 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Travel memories <br /> you’ll never forget
      </h1>
      <p className="text-lg md:text-3xl font-semibold mt-4 leading-relaxed">
        Discover the heart of{" "}
        <strong className="text-yellow-300">Sharm El-Sheikh</strong>
      </p>
      <div className="mt-6">
        <a
          href="#more-info"
          className="bg-white cursor-pointer font-semibold text-black px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition duration-300"
          aria-label="Learn more about the beauty of Sharm El-Sheikh and its attractions"
        >
          Learn more <ArrowRight size={20} />
        </a>
      </div>

      {/* Hero Slider */}
      <HeroSlider data={data} />
    </section>
  );
};

export default HeroSection;
