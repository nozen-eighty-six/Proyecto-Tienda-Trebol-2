import { useEffect, useState } from "react";
import NavAdmin from "./NavAdmin";
import { useSelector } from "react-redux";
import "../../../public/css/cabeceraAd.css";
import useCabeceraAd from "../../hooks/helpCabeceraAd";
const CabeceraAd = () => {
  const state = useSelector((state) => state.user);
  const {
    mAdmin,
    handleMenuAdmin,
    cloud,
    handleCloudHide,
    handleClicLogout,
    handleThemeMode,
    cerrarSesion,
  } = useCabeceraAd();

  useEffect(() => {
    document.body.classList.add("body-ad");
    console.log("body-ad");
  }, []);

  return (
    <>
      <div className={`menu-admin sm:flex lg:hidden`}>
        {!mAdmin ? (
          <ion-icon name="menu-outline" onClick={handleMenuAdmin}></ion-icon>
        ) : (
          <ion-icon name="close-outline" onClick={handleMenuAdmin}></ion-icon>
        )}
      </div>
      <div
        className={`transition ${mAdmin && "bg-black/40 h-screen"}
        `}
      >
        <div
          className={`barra-lateral lg:flex lg:left-0 ${mAdmin && "left-0"} ${
            cloud && "mini-barra-lateral"
          }`}
        >
          <div>
            <div className="nombre-pagina" onClick={handleCloudHide}>
              <ion-icon id="cloud" name="cloud-outline"></ion-icon>
              <span className={`${cloud && "oculto"} `}>Top Moda</span>
            </div>
          </div>

          <NavAdmin handleMenuAdmin={handleMenuAdmin} cloud={cloud} />

          <div className={`content-usuario ${!cloud ? "w-54" : "w-13"} `}>
            <div className={`linea ${cloud && "oculto-linea mb-2"}`}></div>

            <div
              className={`modo-oscuro w-full flex ${
                !cloud ? "justify-between" : "justify-center"
              }`}
            >
              <div
                className={`info ${cloud && "cursor-pointer cloud"}`}
                onClick={handleThemeMode}
              >
                {/*Revisar que cuando este activo variable cloud, que se achique 
                el width del contenedor de dark mode y log out
                */}
                <ion-icon
                  name="moon-outline"
                  className={`w-full h-full ${cloud && "cloud"}`}
                ></ion-icon>
                {!cloud && (
                  <span className={`${cloud && "oculto"}`}>Drak Mode</span>
                )}
              </div>
              {!cloud && (
                <div className="switch" onClick={handleThemeMode}>
                  <div className="base">
                    <div className="circulo"></div>
                  </div>
                </div>
              )}
            </div>

            <div className={`usuario ${cloud ? "w-12 h-11" : "w-full"}`}>
              <div
                className={`h-full flex items-center   overflow-hidden ${
                  cloud ? "justify-center cloud w-13 " : "w-full justify-between"
                } `}
              >
                {!cloud && (
                  <div className="nombre-email">
                    <span className={`nombre ${cloud && "oculto"}`}>
                      {state.usuario?.name}
                    </span>{" "}
                    <span className={`email ${cloud && "oculto"}`}>
                      {state.usuario?.email}
                    </span>
                  </div>
                )}
                <ion-icon
                  name="ellipsis-vertical-outline"
                  className={`abrir-usuario ${cloud && "cloud"}`}
                  style={{ cursor: "pointer" }}
                  onClick={handleClicLogout}
                  title="Log out"
                ></ion-icon>
              </div>
            </div>
          </div>
          <button
            /*Me falta que cuando se oculte la barra, que me muestre
                      el ícono para log out, falta subir los cambios al repo
                      */
            /*onClick="location.href='/usuario/cerrar'"*/

            className="none btn-logout"
            data-scroll-spy
            onClick={cerrarSesion}
          >
            <ion-icon name="log-out-outline"></ion-icon>
            Salir
          </button>
        </div>
      </div>
    </>
  );
};

export default CabeceraAd;
