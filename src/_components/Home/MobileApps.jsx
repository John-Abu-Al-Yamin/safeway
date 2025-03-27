import { Globe } from "lucide-react";
import phone from "@/assets/about.png";

const MobileApps = () => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6"
      data-aos="fade" // Fade in entire container
    >
      {/* Text Content - Animates from left */}
      <div
        className="w-full md:w-1/2 text-left pr-8"
        data-aos="fade-right" // Slide in from right
        data-aos-delay="200" // Slight delay for staggered effect
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Travel With Confidence
        </h1>
        <h2 className="text-2xl mb-6 text-gray-600">
          Top Reasons To Choose Our Agency
        </h2>
        <p className="text-gray-500 mb-6">
          We go above and beyond to make your travel dreams reality, discovering
          hidden gems and must-see attractions
        </p>

        <div className="flex items-center mb-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded mr-4">
            We have 25+ Years of experience
          </span>
        </div>

        <div className="flex space-x-6 mb-8">
          <div
            className="flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="flex items-center">
              <span className="text-3xl font-bold text-gray-800">3k+</span>
            </div>
            <span className="text-gray-500">Popular Destination</span>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="flex items-center">
              <span className="text-3xl font-bold text-gray-800">9m+</span>
            </div>
            <span className="text-gray-500">Satisfied Clients</span>
          </div>
        </div>

        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Explore Destinations →
        </button>
      </div>

      {/* Image Content - Animates from right */}
      <div
        className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0"
        data-aos="fade-left" // Slide in from left
        data-aos-delay="300" // Slightly later than text
      >
        <div className="relative">
          <div className="absolute -top-10 -right-10 z-0">
            <Globe className="text-gray-200" size={100} />
          </div>
          <div className="bg-green-100 w-[400px] h-[400px] rounded-full absolute -z-10 -bottom-20 -left-20"></div>
          <img
            src={phone}
            alt="Traveler"
            className="relative z-10 rounded-full border-8 border-white shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
