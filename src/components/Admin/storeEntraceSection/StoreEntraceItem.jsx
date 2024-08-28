const StoreEntraceItem = ({ element }) => {
  return (
    <tr>
      <td className="  ps-2 pt-2 pb-2">{element.idStoreEntrace}</td>
      <td className=" ps-2 pt-2 pb-2 "> {element.ubication}</td>
      <td className=" ps-2 pt-2 pb-2 "> {element.status}</td>

      <td className="w-32 ps-2 pt-2 pb-2">
        <div className=" flex justify-center">
          <button
            className="me-2 border hover:bg-black/10"
            title="Editar"
            id={element.idStoreEntrace}
          >
            <ion-icon name="create-outline"></ion-icon>{" "}
          </button>
          <button
            className=" border hover:bg-black/10"
            id={element.idStoreEntrace}
            title="Eliminar"
          >
            <ion-icon name="trash-outline"></ion-icon>{" "}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StoreEntraceItem;
