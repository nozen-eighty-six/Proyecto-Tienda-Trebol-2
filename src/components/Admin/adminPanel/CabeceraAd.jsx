import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "../../../../public/css/cabeceraAd.css";
import useCabeceraAd from "../../../hooks/helpCabeceraAd";
import NavAdmin from "./NavAdmin";
import UserInfo from "./UserInfo";
import { handleCloud } from "../../../redux/hideCloudSlice";
const CabeceraAd = () => {
  const state = useSelector((state) => state.user);
  const stateCloud = useSelector((state) => state.cloud);
  const dispatch = useDispatch();
  const {
    mAdmin,
    handleMenuAdmin,

    userInfo,
    handleClicLogout,
    handleThemeMode,
    cerrarSesion,
  } = useCabeceraAd();

  const handleCloudHide = () => {
    dispatch(handleCloud());
  };

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
            stateCloud.oculto && "mini-barra-lateral"
          }`}
        >
          <div>
            <div className="nombre-pagina" onClick={handleCloudHide}>
              <ion-icon id="cloud" name="cloud-outline"></ion-icon>
              <span className={`${stateCloud.oculto && "oculto"} `}>
                Top Moda
              </span>
            </div>
          </div>

          <NavAdmin
            handleMenuAdmin={handleMenuAdmin}
            cloud={stateCloud.oculto}
          />

          <div
            className={`content-usuario ${
              !stateCloud.oculto ? "w-54" : "w-13"
            } `}
          >
            <div
              className={`linea ${stateCloud.oculto && "oculto-linea mb-2"}`}
            ></div>

            <div
              className={`modo-oscuro w-full flex ${
                !stateCloud.oculto ? "justify-between" : "justify-center"
              }`}
            >
              <div
                className={`info ${
                  stateCloud.oculto && "cursor-pointer cloud"
                }`}
                onClick={handleThemeMode}
              >
                {/*Revisar que cuando este activo variable cloud, que se achique 
                el width del contenedor de dark mode y log out
                */}
                <ion-icon
                  name="moon-outline"
                  className={`w-full h-full ${stateCloud.oculto && "cloud"}`}
                ></ion-icon>
                {!stateCloud.oculto && (
                  <span className={`${stateCloud.oculto && "oculto"}`}>
                    Drak Mode
                  </span>
                )}
              </div>
              {!stateCloud.oculto && (
                <div className="switch" onClick={handleThemeMode}>
                  <div className="base">
                    <div className="circulo"></div>
                  </div>
                </div>
              )}
            </div>

            <div
              className={`usuario ${
                stateCloud.oculto ? "w-12 h-11" : "w-full"
              }`}
            >
              <div
                className={`h-full flex items-center   overflow-hidden ${
                  stateCloud.oculto
                    ? "justify-center cloud w-13 modo-oscuro"
                    : "w-full justify-between modo-oscuro"
                } `}
              >
                {!stateCloud.oculto && (
                  <UserInfo
                    name={state.usuario.name}
                    email={state.usuario.email}
                    cloud={stateCloud.oculto}
                    hasButton={false}
                  />
                )}
                <ion-icon
                  name="ellipsis-vertical-outline"
                  className={`abrir-usuario ${stateCloud.oculto && "cloud"}`}
                  style={{ cursor: "pointer" }}
                  onClick={handleClicLogout}
                  title="Log out"
                ></ion-icon>
              </div>
            </div>
          </div>
          {userInfo && stateCloud.oculto && (
            <UserInfo
              name={state.usuario.name}
              email={state.usuario.email}
              hasButton={true}
              cerrarSesion={cerrarSesion}
            />
          )}
          {!stateCloud.oculto && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default CabeceraAd;
