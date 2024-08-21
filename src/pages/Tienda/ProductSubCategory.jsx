import { useMatch, useNavigate, useParams } from "react-router-dom";
import FilterBy from "../../components/Tienda/ProductsSubcategory/FilterBy";
import ProductList from "../../components/Tienda/ProductsSubcategory/ProductList";
import { useEffect, useState } from "react";
import helpHttp from "../../hooks/helpHttp";
import { TOKEN } from "../../Const/token";
import "react-lazy-load-image-component/src/effects/opacity.css";

const ProductSubCategory = () => {
  const [data, setData] = useState([]);
  /*Uso useMatch para capturar parte de la url que coincide con el comodín
  devolviendo un objeto con los parámetros de la url.
  */
  const match = useMatch("/product/*");
  //Accedo a los parámetros de la url.
  const subCategoryName = match.params["*"];

  useEffect(() => {
    const getProducts = () => {
      helpHttp()
        .get("http://localhost:8070/product/subcategory/" + subCategoryName, {
          headers: {
            Authorization: "Bearer " + TOKEN,
          },
        })
        .then((res) => {
          if (!res.err) {
            setData(res);
            console.log(res);
          }
        })
        .catch((err) => console.log(err));
    };

    getProducts();
  }, [subCategoryName]);

  return (
    <div className="w-full h-full grid grid-product-subcategory box-border ">
      <div className="title-product-sub text-center py-8">
        <h2 className="text-6xl font-bold">
          {subCategoryName.includes("-y-")
            ? subCategoryName.charAt(0).toUpperCase() +
              subCategoryName.substring(1).replace("-y-", " y ")
            : subCategoryName.charAt(0).toUpperCase() +
              subCategoryName.substring(1)}
        </h2>
      </div>
      <FilterBy setData={setData} subname={subCategoryName} />
      <ProductList data={data} />
    </div>
  );
};

export default ProductSubCategory;
