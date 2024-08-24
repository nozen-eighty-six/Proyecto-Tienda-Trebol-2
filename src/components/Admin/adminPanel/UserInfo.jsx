const UserInfo = ({ hasButton, name, email, cloud, cerrarSesion }) => {
  return (
    <>
      {!hasButton ? (
        <div className={`nombre-email  modo-oscuro `}>
          <span className={`nombre ${cloud && "oculto"}`}>{name}</span>{" "}
          <span className={`email ${cloud && "oculto"}`}>{email}</span>
        </div>
      ) : (
        <div
          className={`w-52 bottom-1  left-20 fixed flex flex-col items-start   gap-3 bg-gray-500/35  text-sm rounded-sm `}
        >
          <h2 className={`ps-2 ${cloud && "oculto"}`}>{name}</h2>{" "}
          <h2 className={`ps-2 ${cloud && "oculto"}`}>{email}</h2>
          <button
            className="w-full flex  justify-center items-center text-lg mt-0  border-0 bg-gray-300"
            data-scroll-spy
            onClick={cerrarSesion}
          >
            <div className="w-full h-full flex justify-center items-center">
              <ion-icon name="log-out-outline" className="w-1/6"></ion-icon>
              <h2 className="w-1/6">Salir</h2>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default UserInfo;
