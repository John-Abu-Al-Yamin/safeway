import HeadSection from "../HeadSection";
import HotelCard from "../UI/HotelCard";

const HotelRecommendations = () => {
  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: "Swiss-Belhotel Rainforest Kuta",
      address: "Jl. Sunset Road No. 101, Kuta, Bali, Indonesia",
      rating: "4",
      price: "50",
      image: "/images/hotels/h1.png",
    },
    {
      id: 2,
      name: "Swiss-Belhotel Rainforest Kuta",
      address: "Jl. Sunset Road No. 101, Kuta, Bali, Indonesia",
      rating: "4",
      price: "50",
      image: "/images/hotels/h1.png",
    },
  ];

  return (
    <div className="py-8 px-4 md:px-8">
      {/* Box */}
      <HeadSection
        title="Explore Popular Destinations"
        description="One site 34,500 most popular experience"
      />

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelRecommendations;
