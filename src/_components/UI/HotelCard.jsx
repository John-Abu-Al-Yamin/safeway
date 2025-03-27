const HotelCard = ({ hotel }) => {
  const { name, address, rating, price, image } = hotel;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
      className="bg-white rounded-lg overflow-hidden shadow-md mb-6 hover:shadow-lg hover:scale-105 !transition-all !duration-300 !ease-in-out cursor-pointer"
    >
      <div className="flex flex-col md:flex-row">
        {/* Hotel Image */}
        <div className="md:w-1/3 h-64 md:h-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Hotel Details */}
        <div className="md:w-2/3 p-4 md:p-6 flex flex-col justify-between">
          {/* Rating Badge */}
          <div className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-2 rounded-br-lg z-10 flex items-center">
            <span className="text-xs mr-1">★</span>
            <span className="font-bold">{rating}</span>
          </div>

          <div>
            {/* Hotel Name */}
            <h3 className="text-xl md:text-2xl font-semibold text-green-800">
              {name}
            </h3>

            {/* Address */}
            <p className="text-gray-600 mt-1">{address}</p>
          </div>

          {/* Price */}
          <div className="mt-4 text-right">
            <p className="text-2xl font-semibold text-green-700">
              ${price}
              <span className="text-lg font-normal text-gray-600">/night</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
