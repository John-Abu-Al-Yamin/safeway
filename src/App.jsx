import Navbar from "./_components/Navbar";
import "./App.css";
import TopButton from "./layouts/button/TopButton";
import Curser from "./layouts/curser/Curser";
import Loading from "./layouts/loading/Loading";
import ReveloLayout from "./layouts/ReveloLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Routers from "./Routes/Routers";
import Footer from "./layouts/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <main className="overflow-x-hidden ">
      <TopButton />
      <Curser />
      <Loading />
      <ReveloLayout>
        <Navbar />
        <Routers />
        <Footer />
      </ReveloLayout>
    </main>
  );
}

export default App;
