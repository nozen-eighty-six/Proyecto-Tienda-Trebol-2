import { useState } from "react";
import { NavLink } from "react-router-dom";
import UserCategoryOption from "./UserCategoryOption";

const initialOptions = {
  comida: false,
  bebidas: false,
  limpieza: false,
  cuidado: false,
  vendido: false,
  pedidos: false,
};

const UserCategory = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(initialOptions);

  const handleShow = (e) => {
    // let text = e.textContent.toLowerCase() || "";
    console.log(Object.keys(show)); //
    let name = e.target.getAttribute("data-nombre");
    let newShow = { ...initialOptions };
    newShow[name] = true;
    setShow(newShow);
  };

  const handlePropagate = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="box-border w-full h-1/5"
      onMouseLeave={() => setShow(initialOptions)}
    >
      <div className="w-full flex justify-center items-center ">
        <div className="font-light  text-lg p-4 flex gap-10">
          <NavLink className={"hover:custom-red-text relative z-50"}>
            Ofertas
          </NavLink>
          <div className="relative  flex flex-col items-center">
            <NavLink
              className={"relative z-50"}
              onMouseOver={handleShow}
              data-nombre="comida"
            >
              Comida
            </NavLink>
            {show.comida == true && (
              <UserCategoryOption
                ident={1}
                setShow={setShow}
                initialShow={initialOptions}
              />
            )}
            {/*Aplicar la lógica que si uno está habilitado con una clase, las demás se aplicquen otra
            o sea, que si uno está activo, las demás se desactiven
            */}
          </div>
          <div className="relative  flex flex-col items-center">
            <NavLink
              className={"relative z-50"}
              onMouseOver={handleShow}
              data-nombre="bebidas"
            >
              Bebidas
            </NavLink>
            {show.bebidas == true && (
              <UserCategoryOption
                ident={2}
                setShow={setShow}
                initialShow={initialOptions}
              />
            )}
          </div>
          <div className="relative flex flex-col items-center">
            <NavLink
              className={"relative z-50"}
              onMouseOver={handleShow}
              data-nombre="limpieza"
            >
              Limpieza del hogar
            </NavLink>
            {show.limpieza == true && (
              <UserCategoryOption
                ident={3}
                setShow={setShow}
                initialShow={initialOptions}
              />
            )}
          </div>
          <div className="relative flex flex-col items-center">
            <NavLink
              className={"relative z-50"}
              onMouseOver={handleShow}
              data-nombre="cuidado"
            >
              Cuidado Personal
            </NavLink>
            {show.cuidado == true && (
              <UserCategoryOption
                ident={4}
                setShow={setShow}
                initialShow={initialOptions}
              />
            )}
          </div>
          <NavLink>Más Vendido</NavLink>
          {/*<NavLink>Mis Pedidos</NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default UserCategory;
