import HeadSection from "@/_components/HeadSection";
import ProductCard from "@/_components/UI/ProductCard";
import FilterRow from "@/_components/Uitily/FilterRow";
import Pagination from "@/_components/Uitily/Pagination";

const destinations = [
  {
    id: 1,
    name: "Mount Bromo",
    location: "Volcano in East Java",
    image: "/images/products/p1.png",
    rating: 4.9,
    price: 150,
    package: "3D2N",
  },
  {
    id: 2,
    name: "Labengki",
    location: "Islands in Sulawesi",
    image: "/images/products/p2.png",
    rating: 4.8,
    price: 250,
    package: "5D4N",
  },
  {
    id: 3,
    name: "Sailing Komodo",
    location: "Labuan Bajo",
    image: "/images/products/p2.png",
    rating: 4.8,
    price: 200,
    package: "5D4N",
  },
  {
    id: 4,
    name: "Raja Ampat",
    location: "West Papua",
    image: "/images/products/p3.png",
    rating: 4.7,
    price: 300,
    package: "7D6N",
  },
  {
    id: 5,
    name: "Bali",
    location: "Island in Indonesia",
    image: "/images/products/p4.png",
    rating: 4.9,
    price: 180,
    package: "4D3N",
  },
  {
    id: 6,
    name: "Yogyakarta",
    location: "Cultural City",
    image: "/images/products/p5.png",
    rating: 4.6,
    price: 120,
    package: "3D2N",
  },
];

const Categories = () => {
  const handlePageChange = (selectedPage) => {
    console.log(`Selected page: ${selectedPage}`);
  };

  return (
    <div className="container mx-auto px-16 py-32">
      <HeadSection title="Our Travel Categories" />
      <FilterRow />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <ProductCard key={destination.id} destination={destination} />
        ))}
      </div>
      <Pagination pageCount={3} onPress={handlePageChange} />
    </div>
  );
};

export default Categories;
