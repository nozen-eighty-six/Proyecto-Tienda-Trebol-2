import { Route, Routes } from "react-router-dom";
import Cabecera from "../Tienda/Nav/Cabecera";
import Home from "../../pages/Tienda/Home";
import ProductSubCategory from "../../pages/Tienda/ProductSubCategory";
import Cart from "../../pages/Tienda/Cart";
import PaymentSuccess from "../Tienda/Cart/PaymentSuccess";
import AboutUs from "../../pages/Tienda/AboutUs";
import CustomerService from "../../pages/Tienda/CustomerService";

const PublicRoutes = () => {
  return (
    <>
      <Cabecera />
      {/*Routes es 
        un componente de react-router-dom que permite definir las rutas de la aplicación.
        */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/*" element={<ProductSubCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/customer-service" element={<CustomerService />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
