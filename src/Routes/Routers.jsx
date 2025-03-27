import CartPage from "@/pages/CartPage";
import Categories from "@/pages/Categroies";
import FavoritesPage from "@/pages/FavoritesPage";
import HomePage from "@/pages/HomePage";
import ProductDetails from "@/pages/ProductDetails";
import ProfilePage from "@/pages/ProfilePage";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/productDetails" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/profile" element={<ProfilePage />} />

    </Routes>
  );
};

export default Routers;
