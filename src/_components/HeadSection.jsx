import React from "react";

const HeadSection = ({ title, description }) => {
  return (
    <div
      className="flex flex-col gap-5 items-center justify-center mb-16 text-center px-4"
      data-aos="fade"
    >
      <h3
        className="text-gray-900 text-4xl md:text-5xl font-bold leading-tight max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        {title}
      </h3>

      {description && (
        <p
          className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default HeadSection;
