import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSlider = ({ data }) => {
  console.log("dattaaaaa", data.sliders);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="max-w-full md:max-w-6xl mx-auto mt-8 px-2 sm:px-4">
      <Slider {...settings}>
        {data?.sliders.map((slide) => (
          <div key={slide.id} className="p-3">
            <div className="bg-[#A1A8B080] text-white flex flex-col items-center justify-center p-5 rounded-lg shadow-lg w-full mx-auto hover:scale-95 transition-transform duration-200">
              <img
                src={slide.image}
                alt={slide.module.translation.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-bold">
                {slide.module.translation.title}
              </h3>
              <p className="text-sm text-gray-200">
                {slide.module.translation.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;