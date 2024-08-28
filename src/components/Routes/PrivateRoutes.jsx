import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import CabeceraAd from "../Admin/adminPanel/CabeceraAd";
import Users from "../../pages/Admin/Users";
import Suppliers from "../../pages/Admin/Suppliers";
import Products from "../../pages/Admin/Products";
import Categories from "../../pages/Admin/Categories";
import SubCategory from "../../pages/Admin/SubCategory";
import Discount from "../../pages/Admin/Discount";
import SupplierOrder from "../../pages/Admin/SupplierOrder";
import StoreEntrace from "../../pages/Admin/StoreEntrace";

const PrivateRoutes = () => {
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.usuario === null) {
      console.log("No hay usuario");
      navigate("/login");
    } else {
      navigate("/admin/users");
    }
  }, [state.user]);

  return (
    <>
      <CabeceraAd />

      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/subcategories" element={<SubCategory />} />
        <Route path="/discounts" element={<Discount />} />
        <Route path="/orders" element={<SupplierOrder />} />
        <Route path="/store-entrace" element={<StoreEntrace />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
