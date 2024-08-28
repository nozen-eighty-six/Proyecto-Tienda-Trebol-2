import LoaderComponent from "../../Reusable/LoaderComponent";
import SearchCreationSection from "../userSection/SearchCreationSection";
import SupplierItem from "./SupplierItem";

const SupplierSection = ({ data, setData }) => {
  return (
    <>
      <SearchCreationSection controller={"supplier"} setData={setData} />
      <table className="table table-striped table-bordered w-full  h-4/6 bg-white  text-start shadow-sm ">
        <thead>
          <tr>
            <th className=" ">Nombre</th>
            <th className="">Teléfono</th>

            <th className=" ">Correo</th>
            <th className=" ">Dirección</th>
            <th></th>
          </tr>
        </thead>
        {/*Falta seguir con los estilos para las diferentes secciones  */}
        <tbody>
          {data.length > 0 ? (
            data.map((sup) => (
              <SupplierItem element={sup} key={sup.idSupplier} />
            ))
          ) : (
            <LoaderComponent loading={true} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default SupplierSection;
