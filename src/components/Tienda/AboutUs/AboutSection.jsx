import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AboutSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
      <div className="w-85 flex justify-center items-center text-6xl font-bold ">
        Acerca de{" "}
      </div>
      <div className="w-85 flex gap-4 border border-black">
        <div className="w-1/2">
          <LazyLoadImage
            src="/img/about_us.webp"
            effect="opacity"
            className="w-full h-full border border-r-black"
            width={"100%"}
            height={"100%"}
          ></LazyLoadImage>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-1/2 flex justify-center flex-col gap-4">
            <h2 className="text-3xl font-bold text-start leading-normal">
              Nostros
            </h2>
            <p className="text-sm text-justify">
              Nosotros Párrafo. Haz clic para editar y agregar tu propio texto.
              Es fácil. Haz clic en Editar texto o doble clic aquí para agregar
              tu contenido y cambiar la fuente. Puedes arrastrar y soltar este
              texto donde quieras en tu página. En este espacio puedes contar tu
              historia y permitir a los usuarios saber más sobre ti.{" "}
            </p>
            <p className="text-sm text-justify">
              Este es un buen espacio para contar más sobre tu compañía y
              servicios. Puedes usar este espacio para incorporar más detalles
              sobre tu empresa. Escribe sobre tu equipo y los servicios que
              ofreces. Cuéntales a los visitantes la historia sobre cómo se te
              ocurrió la idea de tu negocio y qué te diferencia de tus
              competidores. Haz que tu empresa se destaque y muestra a los
              visitantes quién eres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
