import {
  MapPin,
  Bed,
  Home,
  Droplets,
  Wifi,
} from "lucide-react";
import HeadSection from "../HeadSection";

const LunchRestaurant = () => {
 
  const data = [
    {
      id: 1,
      name: "Noah's Bagels",
      category: "Lunch · American · $$",
      image: "./src/assets/Rectangle.png",
      rating: "4.8",
      location: "Downtown",
      rooms: "2 Bed Room",
      area: "1,642 sq.m",
      price: "$58",
      amenities: ["Wash Room", "Internet"],
    },
    {
      id: 2,
      name: "Sunny Side Café",
      category: "Breakfast · Café · $$",
      image: "./src/assets/Rectangle.png",
      rating: "4.6",
      location: "Uptown",
      rooms: "1 Bed Room",
      area: "1,245 sq.m",
      price: "$45",
      amenities: ["Wash Room", "Internet"],
    },
    {
      id: 3,
      name: "Grill House",
      category: "Dinner · Steakhouse · $$$",
      image: "./src/assets/Rectangle.png",
      rating: "4.9",
      location: "Riverside",
      rooms: "3 Bed Room",
      area: "1,890 sq.m",
      price: "$72",
      amenities: ["Wash Room", "Internet"],
    },
    {
      id: 4,
      name: "Pasta Palace",
      category: "Italian · Pasta · $$",
      image: "./src/assets/Rectangle.png",
      rating: "4.7",
      location: "City Center",
      rooms: "2 Bed Room",
      area: "1,520 sq.m",
      price: "$62",
      amenities: ["Wash Room", "Internet"],
    },
  ];

  return (
    <div className="max-w-full mx-auto p-4">
      <HeadSection
        title="Discover the World's Class Top Hotel"
        description="One site 34,500 most popular experience you'll remember"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((restaurant, index) => (
          <div
            key={restaurant.id}
            className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden flex !transition-all !duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
            data-aos-offset="120"
            data-aos-easing="ease-out"
          >
            <div className="w-1/3">
              <img
                src={restaurant.image || "/placeholder.svg"}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-1">
                  <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-gray-500 text-sm">
                    {restaurant.location}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {restaurant.name}
                </h2>

                <div className="flex justify-between mb-3">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">
                      {restaurant.rooms}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Home className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">
                      {restaurant.area}
                    </span>
                  </div>
                </div>

                <div className="flex mb-4">
                  {restaurant.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center mr-3">
                      {amenity === "Wash Room" ? (
                        <Droplets className="w-4 h-4 text-gray-500 mr-1" />
                      ) : (
                        <Wifi className="w-4 h-4 text-gray-500 mr-1" />
                      )}
                      <span className="text-xs text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold text-gray-800">
                    {restaurant.price}
                  </span>
                  <span className="text-gray-500 text-sm">/Per Person</span>
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LunchRestaurant;