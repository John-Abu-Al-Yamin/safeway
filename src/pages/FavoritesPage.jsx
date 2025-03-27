import { useState } from "react";
import { Heart, Trash2, ShoppingCart, Star, MapPin } from "lucide-react";
import ProductCard from "@/_components/UI/ProductCard";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Sailing Komodo",
      location: "Labuan Bajo",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: 200,
      package: "5D4N",
      type: "travel",
      description:
        "Explore the stunning Komodo National Park with a 5-day sailing adventure.",
    },
    {
      id: 2,
      name: "Summer Linen Shirt",
      location: "Casual Wear",
      image: "/images/products/p2.png",
      rating: "4.5",
      price: 79,
      color: "Beige",
      type: "clothing",
      description:
        "Lightweight and breathable linen shirt perfect for summer days.",
    },
    {
      id: 3,
      name: "Summer Linen Shirt",
      location: "Casual Wear",
      image: "/images/products/p1.png",
      rating: "4.5",
      price: 79,
      color: "Beige",
      type: "clothing",
      description:
        "Lightweight and breathable linen shirt perfect for summer days.",
    },
  ]);

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const destinations = [
    {
      id: 1,
      name: "Mount Bromo",
      location: "Volcano in East Java",
      image: "/images/products/p1.png",
      rating: "4.9",
      price: 150,
      package: "3D2N",
    },
    {
      id: 2,
      name: "Labengki",
      location: "Islands in Sulawesi",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: 250,
      package: "5D4N",
    },
    {
      id: 3,
      name: "Sailing Komodo",
      location: "Labuan Bajo",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: 200,
      package: "5D4N",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Favorites</h1>
        <div className="flex items-center space-x-2 text-gray-600">
          <Heart className="text-red-500 fill-red-500" />
          <span>{favorites.length} Items</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
          >
            {/* Image Container */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => removeFromFavorites(item.id)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
              >
                <Trash2 className="text-red-500" size={20} />
              </button>
            </div>

            {/* Item Details */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star size={16} className="fill-yellow-500" />
                  <span className="text-sm">{item.rating}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin size={16} className="mr-2 text-blue-500" />
                <span className="text-sm">{item.location}</span>
              </div>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>

              {item.type === "travel" && (
                <div className="text-sm text-gray-500 mb-3">
                  Package: {item.package}
                </div>
              )}

              {item.type === "clothing" && item.color && (
                <div className="text-sm text-gray-500 mb-3">
                  Color: {item.color}
                </div>
              )}

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-gray-900">
                  ${item.price.toLocaleString()}
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center">
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {favorites.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <Heart className="mx-auto mb-4 text-gray-300" size={64} />
          <h2 className="text-2xl font-semibold text-gray-600">
            Your Favorites List is Empty
          </h2>
          <p className="text-gray-500 mt-2">
            Explore and add items you love to your favorites!
          </p>
        </div>
      )}

      {/* Recommendations Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <ProductCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
