import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full min-vh-85 custom-red flex flex-col justify-center items-center box-border">
      <div className="w-90  h-3/5 flex justify-center items-center gap-3  text-white/85 ">
        <div className="w-1/4 h-5/6 flex flex-col gap-1   ">
          <h2 className="text-3xl font-bold mb-5">Trebol.</h2>
          <h3 className="text-lg font-bold leading-9">¿Necesitas ayuda?</h3>
          <span className="text-sm">
            Visita <NavLink>Atención al Cliente</NavLink>
          </span>
          <span className="text-sm">para ayuda o llámanos al</span>
          <span className="text-lg font-bold  leading-10">+12 34567890</span>
          {/*Redes sociales */}
        </div>
        <div className="w-1/4 h-5/6 flex flex-col  ">
          <h2 className="text-lg font-bold mb-4">Menú</h2>
          <ul className="text-sm">
            <li className="pt-2">
              <NavLink>Ofertas</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Comida</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Bebidas</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Limpieza del hogar</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Cuidado personal</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Más vendido</NavLink>
            </li>
          </ul>
        </div>
        <div className="w-1/4 h-5/6 flex flex-col ">
          <h2 className="text-lg font-bold mb-4">Categorías</h2>
          <ul className="text-sm">
            <li className="pt-2">
              <NavLink>Vegetales</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Panadería</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Vino</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Lácteos y huevo</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Carne y aves </NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Bebidas sin alcohol</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Productos de limpieza</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Cereales y botanas</NavLink>
            </li>
          </ul>
        </div>
        <div className=" w-1/4 h-5/6 flex flex-col ">
          <h2 className="text-lg font-bold mb-4">Info</h2>
          <ul className="text-sm">
            <li className="pt-2">
              <NavLink>FAQ</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Acerca de</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Atención al cliente</NavLink>
            </li>
            <li className="pt-2">
              <NavLink>Ubicaciones</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-90 h-2/5 flex justify-center items-center border border-t-white border-r-white/0 border-l-white/0 border-b-white/0 ">
        <div className="flex flex-col gap-6">
          <div className="flex gap-8 text-white/85">
            <NavLink className={"text-xs"}>Envio y devoluciones</NavLink>
            <NavLink className={"text-xs"}>Términos y condiciones</NavLink>
            <NavLink className={"text-xs"}>Métodos de pago</NavLink>
          </div>
          <div className="text-center flex flex-col gap-5">
            <h2 className="text-white/80 font-bold">
              Aceptamos los siguientes métodos de pago
            </h2>
            <div className="flex justify-center items-center gap-2">
              <div>
                <LazyLoadImage src="/img/American_Express.webp" />
              </div>
              <div>
                <LazyLoadImage src="/img/brand-mastercard@3x.webp" />
              </div>

              <div>
                <LazyLoadImage src="/img/PayPal.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
