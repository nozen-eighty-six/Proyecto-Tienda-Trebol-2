import LoaderComponent from "../../Reusable/LoaderComponent";
import SupplierOrderItem from "./SupplierOrderItem";

const SupplierOrderTable = ({ data }) => {
  {
    /*Lo único que tengo que hacer para un descuento de un producto es editarlo directamente el producto y pasarle el descuento */
  }
  return (
    <table className="table table-striped table-bordered w-full  h-4/6 bg-white  text-start shadow-sm ">
      <thead>
        <tr>
          <th className=" ">Número</th>
          <th className="">Proveedor</th>

          <th className=" ">Fecha Orden</th>
          <th className=" ">Fecha Llegada</th>
          <th className=" ">Estado</th>
          <th className=" ">Moneda</th>
          <th className=" ">Total</th>

          <th></th>
        </tr>
      </thead>
      {/*Falta seguir con los estilos para las diferentes secciones  */}
      <tbody>
        {data.length > 0 ? (
          data.map((user) => (
            <SupplierOrderItem element={user} key={user.idSupplierOrder} />
          ))
        ) : (
          <LoaderComponent loading={true} />
        )}
      </tbody>
    </table>
  );
};

export default SupplierOrderTable;
