import LoaderComponent from "../../Reusable/LoaderComponent";
import SearchCreationSection from "../userSection/SearchCreationSection";
import CategoryItem from "./CategoryItem";

const CateogiesSection = ({ data, setData }) => {
  return (
    <>
      <SearchCreationSection controller={"category"} setData={setData} />
      <table className="table table-striped table-bordered w-full  h-4/6 bg-white  text-start shadow-sm ">
        <thead>
          <tr>
            <th className=" ">Nombre</th>
            <th className="">Descripción</th>
          </tr>
        </thead>
        {/*Falta seguir con los estilos para las diferentes secciones  */}
        <tbody>
          {data.length > 0 ? (
            data.map((cat) => (
              <CategoryItem element={cat} key={cat.idCategory} />
            ))
          ) : (
            <LoaderComponent loading={true} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default CateogiesSection;
