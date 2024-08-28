import LoaderComponent from "../../Reusable/LoaderComponent";
import StoreEntraceItem from "./StoreEntraceItem";

const StoreEntraceTable = ({ data }) => {
  return (
    <table className="table table-striped table-bordered w-full  h-4/6 bg-white  text-start shadow-sm ">
      <thead>
        <tr>
          <th className=" ">Número</th>

          <th className=" ">Ubicación</th>
          <th className="">Estado</th>
        </tr>
      </thead>
      {/*Falta seguir con los estilos para las diferentes secciones  */}
      <tbody>
        {data.length > 0 ? (
          data.map((cat) => (
            <StoreEntraceItem element={cat} key={cat.idStoreEntrace} />
          ))
        ) : (
          <LoaderComponent loading={true} />
        )}
      </tbody>
    </table>
  );
};

export default StoreEntraceTable;
