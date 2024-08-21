import Slider from "../../components/Tienda/Home/Slider";
import InfoCards from "../../components/Tienda/Home/InfoCards";
import SliderProducts from "../../components/Tienda/Home/SliderProducts";
import FeaturedPromotions from "../../components/Tienda/Home/FeaturedPromotions";
import CategoriesSection from "../../components/Tienda/Home/CategoriesSection";
import BigOffers from "../../components/Tienda/Home/BigOffers";
import Footer from "../../components/Tienda/Home/Footer";
import PaymentSuccess from "../../components/Tienda/Cart/PaymentSuccess";
import { useState } from "react";
import Ubications from "../../components/Tienda/Home/Ubications";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Slider />
      <InfoCards />
      <SliderProducts
        title={"Mejores ofertas"}
        buttonName={"Comprar mejores ofertas"}
        banner={"Mejor oferta"}
        option="offers"
      />
      <FeaturedPromotions />
      <CategoriesSection />
      <SliderProducts
        title={"Iniciar la compra"}
        buttonName={"Comprar más productos"}
        banner={"Populares"}
        option="popular"
      />
      <BigOffers />
      <Ubications />
      <Footer />
    </>
  );
};

export default Home;
