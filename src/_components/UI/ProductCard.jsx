const ProductCard = ({ destination }) => {
  const {
    name,
    location,
    image,
    rating,
    price,
    package: packageType,
  } = destination;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
      className="mx-2 mb-6 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="h-48 w-full">
        <img
          src={image}
          alt={name}
          className="rounded-t-md w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-green-700">{name}</h2>
        <p className="text-gray-500">{location}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-400 text-xl">⭐</span>
          <span className="ml-1 text-yellow-600 font-medium">{rating}</span>
        </div>

        {/* Price and Button */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Start from</p>
            <p className="text-green-700 font-semibold">${price}/pax</p>
          </div>
          <button className="px-4 py-2 bg-rose-400 text-white rounded-md hover:bg-rose-500 transition">
            {packageType}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
