const SupplierItem = ({ element }) => {
  return (
    <tr>
      <td className="  ps-2 pt-2 pb-2">{element.name}</td>
      <td className=" ps-2 pt-2 pb-2 "> {element.phone}</td>
      <td className=" ps-2 pt-2 pb-2 ">{element.mail}</td>

      <td className=" ps-2 pt-2 pb-2">{element.address}</td>
      <td className="w-32 ps-2 pt-2 pb-2">
        <div className=" flex justify-center">
          <button
            className="me-2 border hover:bg-black/10"
            title="Editar"
            id={element.idSupplier}
          >
            <ion-icon name="create-outline"></ion-icon>{" "}
          </button>
          <button
            className=" border hover:bg-black/10"
            title="Eliminar"
            id={element.idSupplier}
          >
            <ion-icon name="trash-outline"></ion-icon>{" "}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SupplierItem;
