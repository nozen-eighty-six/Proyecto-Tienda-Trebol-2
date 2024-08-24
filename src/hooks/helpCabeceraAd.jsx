import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCabeceraAd = () => {
  const [mAdmin, setMAdmin] = useState(false);
  const [cloud, setCloud] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const navigate = useNavigate();

  const handleMenuAdmin = () => {
    //por qué le digo que si es true, que !mAdmin
    //debido a que este solo se debe mostrar si es true, ya
    //que primero este se debe de activar cuando se haga click
    //al button mostrar menu, en caso que no, no debería mostrarse
    //debido a que si no se condicionaba provocaría que este siempre
    //este presente cuando se le de click a los components
    //NavLink ya que estos estos solo ejecutaban setMAdmin(!mAdmin);
    //lo cual solo se podía apreciar en movil.
    if (mAdmin == true) setMAdmin(!mAdmin);
  };

  const handleCloudHide = () => {
    // const linea = document.querySelector(".linea");
    //const barraLateral = document.querySelector(".barra-lateral");
    //barraLateral.classList.toggle("mini-barra-lateral");
    // const spans = document.querySelectorAll("span");
    // const main = document.querySelector("main");
    // main.classList.toggle("min-main");
    /* spans.forEach((span) => {
      span.classList.toggle("oculto");
    });*/
    //linea.classList.toggle("oculto-linea");
    setCloud(!cloud);
  };

  const toggleDarkMode = () => {
    const modoOscuro = document.querySelector(".modo-oscuro");
    const switchModo = document.querySelector(".switch");

    switchModo.addEventListener("click", () => {
      modoOscuro.classList.toggle("active");
    });
  };

  const handleThemeMode = () => {
    let body = document.body;
    const circulo = document.querySelector(".circulo");
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
  };

  const handleClicLogout = () => {
    const buttonLogout = document.querySelector(".btn-logout");

    if (buttonLogout) {
      buttonLogout.classList.toggle("none");
    } else {
      setUserInfo(!userInfo);
      console.log("No se encontró el botón de logout");
    }
  };

  const cerrarSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    //removeTokenUser();
    navigate("/login");
  };

  return {
    mAdmin,
    handleMenuAdmin,
    cloud,
    handleCloudHide,
    userInfo,
    toggleDarkMode,
    handleClicLogout,
    handleThemeMode,
    cerrarSesion,
  };
};

export default useCabeceraAd;
