import HeroSection from "@/_components/Home/HeroSection";
import HotelRecommendations from "@/_components/Home/HotelRecommendations";
import LunchRestaurant from "@/_components/Home/LunchRestaurant";
import MobileApps from "@/_components/Home/MobileApps";
import ProductList from "@/_components/Home/ProductsSection";
import TravelFeatures from "@/_components/Home/TravelSection";
import { useGetData } from "@/hooks/useGetData";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await useGetData("User");
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full min-h-screen overflow-hidden">
      <div
        className="relative bg-cover bg-center bg-no-repeat flex flex-col justify-between"
        style={{ backgroundImage: "url('/images/homeimage.svg')" }}
      >
        <HeroSection data={data} />
      </div>

      <section>
        <ProductList />
      </section>
      <section>
        <HotelRecommendations />
      </section>
      <section>
        <LunchRestaurant />
      </section>
      <section>
        <MobileApps />
      </section>
      <section>
        <TravelFeatures />
      </section>
    </main>
  );
};

export default HomePage;
