import { useState } from "react";
import { Trash2, Plus, Minus, Star, MapPin, Calendar } from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sailing Komodo",
      location: "Labuan Bajo",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: 200,
      package: "5D4N",
      type: "travel",
      quantity: 1,
      details: {
        duration: "5 Days 4 Nights",
        destination: "Komodo National Park",
        includes: ["Boat Tour", "Accommodation", "Meals", "Guide"],
      },
    },
    {
      id: 2,
      name: "Sailing Komodo",
      location: "Labuan Bajo",
      image: "/images/products/p2.png",
      rating: "4.8",
      price: 200,
      package: "5D4N",
      type: "travel",
      quantity: 1,
      details: {
        duration: "5 Days 4 Nights",
        destination: "Komodo National Park",
        includes: ["Boat Tour", "Accommodation", "Meals", "Guide"],
      },
    },
  ]);

  // Update quantity
  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-16 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items Column */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center border-b pb-4 space-x-4 ${
                item.type === "travel" ? "bg-blue-50 p-4 rounded-lg" : ""
              }`}
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="flex-grow">
                <h2 className="font-bold text-xl text-blue-800">{item.name}</h2>
                {item.location && (
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin size={16} className="text-blue-500" />
                    <span>{item.location}</span>
                  </div>
                )}
                {item.rating && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span>{item.rating}</span>
                    {item.package && (
                      <>
                        <Calendar size={16} className="text-blue-500 ml-4" />
                        <span>{item.package}</span>
                      </>
                    )}
                  </div>
                )}
                {item.details && (
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Includes:</strong> {item.details.includes.join(", ")}
                  </div>
                )}
                <p className="font-bold text-gray-800">${item.price.toFixed(2)}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center border rounded-full">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="p-2 hover:bg-gray-100 rounded-l-full"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="p-2 hover:bg-gray-100 rounded-r-full"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Remove Item */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary Column */}
        <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$5.99</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total</span>
            <span>${(calculateSubtotal() + 5.99).toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
