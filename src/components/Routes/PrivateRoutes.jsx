import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import CabeceraAd from "../Admin/CabeceraAd";

const PrivateRoutes = () => {
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.usuario === null) {
      console.log("No hay usuario");
      navigate("/login");
    }
  }, [state.user]);

  return (
    <>
      <CabeceraAd />

      <Routes>
        <Route path="/user" element={<h1>Usuario</h1>} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
