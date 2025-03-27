import { useState } from "react"
import {Link} from "react-router-dom"
import { Calendar, ChevronLeft, Clock, MapPin, Share, Star, Users } from "lucide-react"
import image from "@/assets/Rectangle.png"

// Sample detailed data for a restaurant
const restaurantDetails = {
  id: 1,
  name: "The Gourmet Kitchen",
  image: image,
  rating: 4.7,
  reviewCount: 128,
  priceRange: "$$$",
  location: "123 Main Street, Downtown",
  cuisine: "Contemporary",
  description:
    "The Gourmet Kitchen offers fine dining with a modern twist on classic dishes. Our chef combines traditional techniques with innovative flavors to create a unique culinary experience. The elegant atmosphere and attentive service make this the perfect venue for special occasions or a refined night out.",
  features: [
    "Outdoor Seating",
    "Full Bar",
    "Private Dining",
    "Wheelchair Accessible",
    "Vegan Options",
    "Gluten-Free Options",
  ],
  menu: [
    {
      category: "Starters",
      items: [
        { name: "Truffle Arancini", price: "$16", description: "Crispy risotto balls with black truffle and parmesan" },
        { name: "Tuna Tartare", price: "$18", description: "Fresh tuna with avocado, citrus, and crispy wontons" },
      ],
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Filet Mignon",
          price: "$42",
          description: "8oz grass-fed beef with potato puree and seasonal vegetables",
        },
        {
          name: "Herb Crusted Salmon",
          price: "$36",
          description: "Wild-caught salmon with lemon beurre blanc and asparagus",
        },
      ],
    },
  ],
  reviews: [
    {
      id: 1,
      author: "Emily Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely incredible dining experience! The food was exquisite and the service was impeccable. Will definitely be returning soon.",
    },
    {
      id: 2,
      author: "Michael Chen",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great atmosphere and delicious food. The truffle arancini was a standout dish. Slightly pricey but worth it for a special occasion.",
    },
    {
      id: 3,
      author: "Sarah Williams",
      rating: 5,
      date: "2 months ago",
      comment:
        "One of the best restaurants in the city. The chef's tasting menu is an absolute must-try. Every course was perfectly executed.",
    },
  ],
  relatedRestaurants: [
    {
      id: 2,
      name: "Bella Italia",
      image: image,
      rating: 4.6,
      priceRange: "$$",
      cuisine: "Italian",
    },
    {
      id: 3,
      name: "Ocean Blue",
      image:image,
      rating: 4.8,
      priceRange: "$$$",
      cuisine: "Seafood",
    },
    {
      id: 4,
      name: "Spice Paradise",
      image: image,
      rating: 4.5,
      priceRange: "$$",
      cuisine: "Indian",
    },
  ],
}

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState("overview")
  const [guestCount, setGuestCount] = useState(2)
  const [reservationDate, setReservationDate] = useState("")
  const [reservationTime, setReservationTime] = useState("")

  // Render star ratings
  const renderRating = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : i < rating
                  ? "text-yellow-400 fill-yellow-400/50"
                  : "text-gray-300 fill-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back button */}
        <Link to="/category-details" className="mb-6 inline-flex items-center text-gray-600 hover:text-gray-900">
          <ChevronLeft className="mr-1 h-5 w-5" />
          Back to Restaurants
        </Link>

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              {restaurantDetails.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
              <div className="flex items-center">
                {renderRating(restaurantDetails.rating)}
                <span className="ml-2">({restaurantDetails.reviewCount} reviews)</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <span className="font-medium">{restaurantDetails.priceRange}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                  {restaurantDetails.cuisine}
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center text-gray-500">
              <MapPin className="mr-1 h-4 w-4" />
              {restaurantDetails.location}
            </div>
          </div>
          <button className="flex items-center justify-center rounded-full bg-white px-4 py-2 text-gray-700 shadow-md hover:bg-gray-50">
            <Share className="mr-2 h-4 w-4" />
            Share
          </button>
        </div>

        {/* Single Image */}
        <div className="mb-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <img
              src={restaurantDetails.image || "/placeholder.svg"}
              alt={restaurantDetails.name}
              
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-6 border-b">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "overview"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("menu")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "menu"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "reviews"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Reviews
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column - Content based on active tab */}
          <div className="md:col-span-2">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">About</h2>
                  <p className="text-gray-600">{restaurantDetails.description}</p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">Features</h2>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {restaurantDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center rounded-lg bg-white p-3 shadow-sm">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                          <span className="text-lg">✓</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">Location</h2>
                  <div className="aspect-[16/9] overflow-hidden rounded-lg bg-gray-200">
                    {/* Map placeholder - would be replaced with actual map component */}
                    <div className="flex h-full items-center justify-center">
                      <MapPin className="mr-2 h-6 w-6 text-gray-400" />
                      <span className="text-gray-500">Map view of {restaurantDetails.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "menu" && (
              <div className="space-y-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Menu</h2>

                {restaurantDetails.menu.map((category, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">{category.category}</h3>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="rounded-lg bg-white p-4 shadow-sm">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <span className="font-medium text-gray-900">{item.price}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="rounded-lg bg-indigo-50 p-4 text-center">
                  <p className="text-indigo-700">
                    This is a sample menu. Please contact the restaurant for the complete and current menu.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                  <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-6">
                  {restaurantDetails.reviews.map((review) => (
                    <div key={review.id} className="rounded-lg bg-white p-6 shadow-sm">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{review.author}</h4>
                          <div className="mt-1 flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300 fill-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Load More Reviews
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Reservation */}
          <div className="space-y-8">
            {/* Reservation Card */}
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Make a Reservation</h3>
              <form className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Party Size</label>
                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center text-gray-500 hover:bg-gray-100"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    >
                      -
                    </button>
                    <div className="flex flex-1 items-center justify-center">
                      <Users className="mr-2 h-4 w-4 text-gray-400" />
                      <span>{guestCount} guests</span>
                    </div>
                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center text-gray-500 hover:bg-gray-100"
                      onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Date</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={reservationDate}
                      onChange={(e) => setReservationDate(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Time</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={reservationTime}
                      onChange={(e) => setReservationTime(e.target.value)}
                    >
                      <option value="">Select a time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-3 text-center font-medium text-white shadow-md transition-all duration-200 hover:from-indigo-700 hover:to-purple-700"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Similar Restaurants Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">More Restaurants to Explore</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {restaurantDetails.relatedRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-md">
                    {restaurant.priceRange}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-bold text-gray-900">{restaurant.name}</h3>
                  <div className="mb-2 flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{restaurant.rating}</span>
                    <span className="ml-2 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  <Link
                    to={`/restaurant/${restaurant.id}`}
                    className="mt-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}