import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux/userSlice";

const UserAccountPanel = ({ data, setShowPanel }) => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    setShowPanel(false);
  };

  return (
    <div className="absolute z-50 top-12 right-7  w-48 h-36   border rounded-sm bg-white text-black ">
      <div className=" box-border w-full h-full flex flex-col gap-2 justify-start relative">
        <div className="text-sm flex flex-col ps-2 pt-2">
          <span className="font-bold text-sm">Nombre:</span>
          <span className="text-xs"> {data?.name}</span>
        </div>
        <div className="flex flex-col ps-2 pt-2">
          <span className="font-bold">Correo:</span>
          <span className="text-xs">{data?.email}</span>
        </div>
        <div className="absolute w-full bottom-0 rounded-sm  hover:bg-gray-600/10">
          <button className="p-2 outline-none " onClick={handleLogout}>
            {" "}
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccountPanel;
