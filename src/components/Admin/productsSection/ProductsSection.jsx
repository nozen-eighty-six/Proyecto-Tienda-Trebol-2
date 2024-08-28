import LoaderComponent from "../../Reusable/LoaderComponent";
import SearchCreationSection from "../userSection/SearchCreationSection";
import ProductItem from "./ProductItem";

const ProductsSection = ({ data, setData }) => {
  return (
    <>
      <SearchCreationSection controller="product" setData={setData} />
      <table className="table table-striped table-bordered w-full  h-4/6 bg-white  text-start shadow-sm ">
        <thead>
          <tr>
            <th className=" ">Nombre</th>
            <th className="">Descripción</th>

            <th className=" ">Precio</th>
            <th className=" ">SubCategoría</th>
            <th className=" ">Proveedor</th>
            <th></th>
          </tr>
        </thead>
        {/*Falta seguir con los estilos para las diferentes secciones  */}
        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <ProductItem element={user} key={user.idProduct} />
            ))
          ) : (
            <LoaderComponent loading={true} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProductsSection;
