/*
  <tr>
          <th className=" ">Número</th>
          <th className="">Producto</th>

          <th className=" ">Descuento {"(%)"}</th>
          <th className=" ">Fecha Inicio</th>
          <th className=" ">Fecha Fin</th>
          <th></th>
        </tr>
*/

import { dateFormat } from "../../../services/dateFormat";

const DiscountItem = ({ element, setDiscountId, setModalProductDiscount }) => {
  const handleProductDiscountModal = (e) => {
    console.log(e.target);
    let id = parseInt(e.target.id);
    setDiscountId(id);
    setModalProductDiscount(true);
  };

  return (
    <tr>
      <td className="  ps-2 pt-2 pb-2">{element.idDiscount}</td>
      <td className="w-32  ps-2 pt-2 pb-2 ">
        {" "}
        <div className="w-full h-full flex justify-center">
          <button
            className="p-0 border flex items-center hover:bg-black/10"
            title="Ver Productos"
            id={element.idDiscount}
            onClick={handleProductDiscountModal}
          >
            <ion-icon name="eye-outline" id={element.idDiscount}></ion-icon>{" "}
          </button>
        </div>
      </td>
      <td className=" ps-2 pt-2 pb-2 ">
        {" "}
        {parseFloat(element.discountValue) * 100}
      </td>

      <td className=" ps-2 pt-2 pb-2 ">
        {dateFormat(new Date(element.starDate))}
      </td>

      <td className=" ps-2 pt-2 pb-2">
        {dateFormat(new Date(element.endDate))}
      </td>
      <td className="w-32 ps-2 pt-2 pb-2">
        <div className=" flex justify-center">
          <button
            className="me-2 border hover:bg-black/10"
            title="Editar"
            id={element.idDiscount}
          >
            <ion-icon name="create-outline"></ion-icon>{" "}
          </button>
          <button
            className=" border hover:bg-black/10"
            id={element.idDiscount}
            title="Eliminar"
          >
            <ion-icon name="trash-outline"></ion-icon>{" "}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DiscountItem;
