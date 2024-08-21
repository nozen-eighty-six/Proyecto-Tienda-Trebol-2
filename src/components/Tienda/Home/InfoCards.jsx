import { NavLink } from "react-router-dom";

const InfoCards = () => {
  return (
    <div className="w-full min-h-25">
      <div
        className="w-full min-h-25  flex justify-center
       items-center gap-5"
      >
        <div className="px-5 py-2 w-1/4 flex justify-center items-center gap-3 border-white border-s-black border-r-black border-2 ">
          <div>
            <svg
              className="w-10 h-10"
              preserveAspectRatio="xMidYMid meet"
              data-bbox="22.1 47 160.002 106"
              viewBox="22.1 47 160.002 106"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <defs></defs>
              <g>
                <path
                  d="M74.2 137.2c0 8.7-7.1 15.8-15.9 15.8s-15.9-7.1-15.9-15.8 7.2-15.8 15.9-15.8c8.8 0 15.9 7.1 15.9 15.8zm40-90.2H31.4c-5.1 0-9.3 4.2-9.3 9.3v73.8c0 5.1 3.5 9.3 7.8 9.3h5.5c1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3h-5.5c-1.6 0-3.1-2.2-3.1-4.7V56.3c0-2.6 2.1-4.7 4.7-4.7h82.7c2.6 0 4.7 2.1 4.7 4.7v73.8c0 2.6-2.1 4.7-4.7 4.7H81.1c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h33.1c5.1 0 9.3-4.2 9.3-9.3V56.3c0-5.1-4.2-9.3-9.3-9.3zm58.9 50.7h-2L160.2 78c-1.7-2.5-4.5-4-7.5-4h-22.2c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h22.2c1.5 0 2.8.7 3.5 1.7l9.6 17.2H163c-.4 0-.7.1-1 .2l-6.3 3.1h-23.1c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h23.6c.4 0 .7-.1 1-.2l6.3-3.1h9.6c2.9 0 4.4 1.8 4.4 5.1v22.9c0 2.4-2 4.4-4.4 4.4h-4.6c-1.1-7.6-7.7-13.4-15.7-13.4-7.9 0-14.5 5.8-15.7 13.4h-6.7c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h6.6c1.1 7.6 7.7 13.5 15.7 13.5s14.6-5.9 15.7-13.5h4.6c5 0 9.1-4.1 9.1-9.1v-22.9c.1-5.5-3.6-9.4-9-9.4z"
                  fill="#d81313"
                  data-color="1"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-sm font-bold">Entrega gratis</p>
            <p className="text-xs">A tu puerta</p>
          </div>
        </div>

        <div className="px-5 py-2 w-1/4 flex justify-center items-center gap-2 border-white border-r-black border-2">
          <div>
            <svg
              className="w-10 h-10"
              preserveAspectRatio="xMidYMid meet"
              data-bbox="29.2 44.077 141.502 111.823"
              viewBox="29.2 44.077 141.502 111.823"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <defs></defs>
              <g>
                <path
                  d="M162.5 79.8h-125c-4.6 0-8.3 3.7-8.3 8.3v6c0 4.6 3.7 8.3 8.3 8.3h1.1l9.9 44.7c1.2 5.2 5.7 8.8 11 8.8h80.9c5.3 0 9.9-3.6 11-8.8l9.9-44.7h1.1c4.6 0 8.3-3.7 8.3-8.3v-6c.1-4.6-3.6-8.3-8.2-8.3zm-15.6 66.3c-.7 3-3.4 5.1-6.4 5.1h-81c-3.1 0-5.7-2.1-6.4-5.1l-9.7-43.7h113.1l-9.6 43.7zm-81.4-16.8v-6.2c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v6.2c0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.7zm14.9 0v-6.2c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v6.2c0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.7zm14.9 0v-6.2c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v6.2c0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.7zm14.9 0v-6.2c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v6.2c0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.7zm14.8 0v-6.2c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v6.2c0 2.6-2.1 4.7-4.7 4.7-2.5 0-4.7-2.1-4.7-4.7zM68.6 71.4L80 45.5c.5-1.2 1.9-1.7 3.1-1.2 1.2.5 1.7 1.9 1.2 3.1L72.9 73.3c-.4.9-1.3 1.4-2.2 1.4-.3 0-.6-.1-.9-.2-1.2-.5-1.7-1.9-1.2-3.1zm47-24.2c-.4-1.2.2-2.6 1.4-3 1.2-.4 2.6.2 3 1.4l9.4 25.9c.4 1.2-.2 2.6-1.4 3-.3.1-.5.1-.8.1-1 0-1.9-.6-2.2-1.6l-9.4-25.8z"
                  fill="#d81313"
                  data-color="1"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-sm font-bold">Entrega local</p>
            <p className="text-xs">
              Busca las <NavLink className={"underline"}>ubicaciones</NavLink>{" "}
            </p>
          </div>
        </div>
        <div className="px-5 py-2 flex w-1/4 justify-center items-center gap-2 border-white border-r-black border-2">
          <div>
            <svg
              className="w-10 h-10"
              preserveAspectRatio="xMidYMid meet"
              data-bbox="43.6 44.4 112.708 123.3"
              viewBox="43.6 44.4 112.708 123.3"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <defs></defs>
              <g>
                <path
                  d="M148.9 94.5H146v-7.3c0-24.1-24.6-42.8-45.8-42.8-21.2 0-45.8 18.7-45.8 42.8v7.3h-3.2c-4.2 0-7.6 3.7-7.6 8.2v14.6c0 4.5 3.4 8.2 7.6 8.2H59V87.2c0-17.6 18-38.1 41.1-38.1s41.1 20.5 41.1 38.1V129c0 15.4-12.1 28-27.4 28.7-1-3-3.8-5.2-7.2-5.2h-7.9c-4.2 0-7.6 3.4-7.6 7.6 0 4.2 3.4 7.6 7.6 7.6h7.9c3.4 0 6.3-2.3 7.2-5.3 17.8-.8 32-15.5 32-33.4v-3.4h2.9c4.2 0 7.6-3.7 7.6-8.2v-14.6c.2-4.6-3.2-8.3-7.4-8.3zm-100.7 8.2c0-.3 0-.6.1-.9v16.4c-.1-.3-.1-.6-.1-.9v-14.6zM89.5 150l-1.9 4.3c-14.9-6.7-22.7-22.1-22.7-33.8v-15.8c0-11.3 9.7-25.5 18.2-30.3-1.4-3-2.3-6.1-2.3-9.2h4.7c0 14.1 31.2 39.8 53 39.8v4.7c-.9 0-1.9-.1-2.9-.2v11c-.1 9.6-4.9 23-14.1 29.9l-2.8-3.8c8-6 12.2-17.7 12.2-26.1v-11.8c-8.6-2-19-6.9-28.4-13.6-4.2-3-12-9.2-17-16.6-7.1 3.9-15.8 16.8-15.8 26.2v15.8c-.2 10 6.8 23.7 19.8 29.5z"
                  fill="#d81313"
                  data-color="1"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-sm font-bold">A tu disposición</p>
            <p className="text-xs">Asistencia online 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
