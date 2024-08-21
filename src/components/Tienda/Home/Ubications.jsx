const Ubications = () => {
  return (
    <div
      id="ubication"
      className="w-full h-screen flex justify-center border  "
    >
      <div className="w-85 flex flex-col gap-6 border ">
        <h2 className="w-1/4 text-2xl font-bold">
          {" "}
          Encuentranos en la siguiente ubicación
        </h2>
        <div className=" w-full h-4/5 flex justify-center items-center border border-black">
          {/*Tal vez agregar una imagen referencial */}
          <div className="w-1/2 h-1/2 flex flex-col justify-center items-center border border-black">
            <span className="w-28 h-28">
              <svg
                className="w-28 h-28 fill-current custom-red-text"
                preserveAspectRatio="xMidYMid meet"
                data-bbox="33.5 20 133 160"
                viewBox="33.5 20 133 160"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                aria-label=""
              >
                <g>
                  <path
                    d="M99.997 60c-14.69 0-26.599 11.94-26.599 26.668 0 14.727 11.909 26.667 26.599 26.667s26.599-11.94 26.599-26.667C126.596 71.94 114.687 60 99.997 60zm0 40.001c-7.345 0-13.299-5.971-13.299-13.333 0-7.364 5.954-13.334 13.299-13.334s13.3 5.97 13.3 13.334c0 7.362-5.955 13.333-13.3 13.333zm0-80.001C63.273 20 33.5 49.849 33.5 86.667 33.5 123.486 99.997 180 99.997 180S166.5 123.486 166.5 86.667C166.5 49.849 136.724 20 99.997 20zm0 140.001s-53.198-43.879-53.198-73.335c0-29.454 23.819-53.333 53.198-53.333 29.383 0 53.2 23.879 53.2 53.333 0 29.457-53.2 73.335-53.2 73.335z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="text-xl font-bold">Ubicación</span>
            <div className="font-xl">
              <h2 className="">Av Fray A. Alcalde 10 44101 Santiago </h2>
              <span>+54</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubications;
