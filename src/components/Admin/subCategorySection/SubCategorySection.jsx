import LoaderComponent from "../../Reusable/LoaderComponent";
import SearchCreationSection from "../userSection/SearchCreationSection";
import SubCategoryItem from "./SubCategoryItem";

const SubCategorySection = ({ data, setData }) => {
  return (
    <>
      <SearchCreationSection controller={"subCategory"} setData={setData} />
      <table className="table table-striped table-bordered w-full  h-4/6 bg-white  text-start shadow-sm ">
        <thead>
          <tr>
            <th className=" ">Nombre</th>
            <th className="">Descripción</th>

            <th className="">Estado</th>
            <th></th>
          </tr>
        </thead>
        {/*Falta seguir con los estilos para las diferentes secciones  */}
        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <SubCategoryItem element={user} key={user.idSubCategory} />
            ))
          ) : (
            <LoaderComponent loading={true} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default SubCategorySection;
