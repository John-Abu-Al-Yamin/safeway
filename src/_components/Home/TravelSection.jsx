

const TravelFeatures = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold text-gray-800 mb-4"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          The Ultimate Travel Experience
        </h1>
        <h2
          className="text-2xl text-gray-600 mb-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Features That Set Our Agency Apart
        </h2>

        <div
          className="flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <span className="text-4xl font-bold text-green-600 mb-2">85K+</span>
          <span className="text-lg text-gray-500">Happy Customers</span>
          <p
            className="text-gray-500 mt-4 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We pride ourselves offering personalized itineraries
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Tent Camping */}
        <div
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Tent Camping
          </h3>
          <p className="text-gray-500">
            Tent camping is wonderful way to connect with nature
          </p>
        </div>

        {/* Kayaking */}
        <div
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7l4-4m0 0l4 4m-4-4v18m-5-5h14a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Kayaking</h3>
          <p className="text-gray-500">
            Kayaking is a thrilling outdoor activity that adventure
          </p>
        </div>

        {/* Mountain Biking */}
        <div
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Mountain Biking
          </h3>
          <p className="text-gray-500">
            Mountain biking is exhilarating sport that physical fitness
          </p>
        </div>

        {/* Fishing & Boat */}
        <div
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fishing & Boat
          </h3>
          <p className="text-gray-500">
            Fishing and boat bring joy quintessential activities that
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelFeatures;