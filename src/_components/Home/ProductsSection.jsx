import ProductCard from "../UI/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeadSection from "../HeadSection";

const ProductList = () => {
  const destinations = [
    {
      id: 1,
      name: "Mount Bromo",
      location: "Volcano in East Java",
      image: "/images/products/p1.png",
      rating: "4.9",
      price: "150",
      package: "3D2N",
    },
    {
      id: 2,
      name: "Labengki",
      location: "Islands in Sulawesi",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: "250",
      package: "5D4N",
    },
    {
      id: 3,
      name: "Sailing Komodo",
      location: "Labuan Bajo",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: "200",
      package: "5D4N",
    },
    {
      id: 4,
      name: "Mount Bromo",
      location: "Volcano in East Java",
      image: "/images/products/p1.png",
      rating: "4.9",
      price: "150",
      package: "3D2N",
    },
    {
      id: 5,
      name: "Labengki",
      location: "Islands in Sulawesi",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: "250",
      package: "5D4N",
    },
    {
      id: 6,
      name: "Sailing Komodo",
      location: "Labuan Bajo",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: "200",
      package: "5D4N",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <HeadSection
        title="Discover the World's Treasures with Ravelo"
        description={`One site ${34500} most popular experiences you'll remember`}
      />

      <Slider {...settings}>
        {destinations.map((destination) => (
          <ProductCard key={destination.id} destination={destination} />
        ))}
      </Slider>

      <div className="mt-8 text-center">
        <button className="bg-gray-800 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-primary-dark transition">
          View All Experiences
        </button>
      </div>
    </div>
  );
};

export default ProductList;
