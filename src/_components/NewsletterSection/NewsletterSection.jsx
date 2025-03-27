 import './NewsletterSection.css'
const NewsletterSection = () => {
  return (
    <section className="NewsletterSection bg-gray-50 py-16 mt-10" >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center  px-6 md:px-12">
         <div className="mb-8 md:mb-0 md:w-1/2  text-center ">
          <h2 className="text-3xl font-semibold text-gray-800">
          Stay Updated with TravelEase          </h2>
          <p className="mt-4 text-gray-700">
          Subscribe to our newsletter and be the first to know about exclusive deals and travel tips.
          </p>
          
        <div
  className={`search flex items-center space-x-2 p-4 border-black   border-b mt-2 transition-opacity duration-300`}
>   
<i className="ri-mail-line text-gray-900"></i>
         <input
              type="text"
              placeholder="Email address"
              className="bg-transparent outline-none text-sm font-light placeholder-gray-900 flex-grow"
              onChange={() => console.log("ahmed")}
            />
            <button
            type="submit"
            className=" font-bold    "
          >
            Signup
          </button>
           </div>
        </div>

         
      </div>
    </section>
  );
};

export default NewsletterSection;
