import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import CabeceraAd from "../Admin/adminPanel/CabeceraAd";
import Users from "../../pages/Admin/Users";

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
      </Routes>
    </>
  );
};

export default PrivateRoutes;
