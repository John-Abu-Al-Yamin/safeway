import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  User,
  Plane,
  Menu,
  X,
  Home,
  Info,
  Globe,
  Mountain,
  GalleryVertical,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const menuItems = [
    { text: "HOME", link: "/", icon: <Home className="w-4 h-4" /> },
    { text: "ABOUT", link: "/about", icon: <Info className="w-4 h-4" /> },
    { text: "TOURS", link: "/tours", icon: <Plane className="w-4 h-4" /> },
    {
      text: "DESTINATIONS",
      link: "/destinations",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      text: "GALLERY",
      link: "/gallery",
      icon: <GalleryVertical className="w-4 h-4" />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white   shadow-lg py-4"
          : "bg-gradient-to-r from-gray-900 to-teal-900 py-6"
      }`}
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            {/* Logo with animation */}
            <Link
              to="/"
              className={`flex items-center text-2xl font-bold ${
                scrolled ? "text-blue-600" : "text-white"
              }`}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Mountain className="w-8 h-8 mr-2 text-teal-400" />
              <span>
                Travel<span className="text-teal-400">Ease</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={item.text}
                  to={item.link}
                  className={`flex items-center gap-1.5 relative group font-medium ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                  data-aos="fade-down"
                  data-aos-delay={150 + index * 100}
                >
                  {item.icon}
                  {item.text}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 ${
                      scrolled ? "bg-teal-500" : "bg-white"
                    } transition-all duration-300 ease-out w-0 group-hover:w-full`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* User and Book Trip Section */}
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className={`p-2 rounded-full hidden md:flex items-center gap-2 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-gray-900 hover:bg-opacity-10"
              }`}
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <User className="w-5 h-5" />
              <span className="hidden lg:inline">Profile</span>
            </Link>

            <Link
              to="/book-trip"
              className={`hidden md:flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-lg"
                  : "bg-white text-teal-600 hover:bg-opacity-90"
              }`}
              data-aos="fade-left"
              data-aos-delay="350"
            >
              <Plane className="w-5 h-5" />
              <span>Book A Trip</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full focus:outline-none md:hidden ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.link}
              className="flex items-center gap-3 px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-300 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              {item.text}
            </Link>
          ))}
          <Link
            to="/profile"
            className="flex items-center gap-3 px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-300 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            <User className="w-5 h-5" />
            Profile
          </Link>
          <Link
            to="/book-trip"
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            <Plane className="w-5 h-5" />
            Book A Trip
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
