import { dateFormat } from "../../../services/dateFormat";

const SupplierOrderItem = ({ element }) => {
  return (
    <tr>
      <td className="  ps-2 pt-2 pb-2">{element.idSupplierOrder}</td>
      <td className=" ps-2 pt-2 pb-2 "> {element.supplier.name}</td>

      <td className=" ps-2 pt-2 pb-2 ">
        {dateFormat(new Date(element.orderDate))}
      </td>

      <td className=" ps-2 pt-2 pb-2">
        {dateFormat(new Date(element.estimatedDeliveryDate))}
      </td>
      <td className="  ps-2 pt-2 pb-2">{element.status}</td>
      <td className="  ps-2 pt-2 pb-2">{element.currency}</td>
      <td className="  ps-2 pt-2 pb-2">{element.orderTotal}</td>

      <td className="w-32 ps-2 pt-2 pb-2">
        <div className=" flex justify-center">
          <button
            className="me-2 border hover:bg-black/10"
            title="Editar"
            id={element.idSupplierOrder}
          >
            <ion-icon name="create-outline"></ion-icon>{" "}
          </button>
          <button
            className=" border hover:bg-black/10"
            id={element.idSupplierOrder}
            title="Eliminar"
          >
            <ion-icon name="trash-outline"></ion-icon>{" "}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SupplierOrderItem;
