import { useSelector } from "react-redux";
import SearchCreationSection from "../../components/Admin/userSection/SearchCreationSection";
import { useEffect, useState } from "react";
import helpHttpT from "../../hooks/helpHttpT";
import { SERVER_URL } from "../../Const/server";
import { TOKEN } from "../../Const/token";
import ProductsSection from "../../components/Admin/productsSection/ProductsSection";

const Products = () => {
  const state = useSelector((state) => state.cloud);
  const [data, setData] = useState([]);

  useEffect(() => {
    helpHttpT()
      .get(SERVER_URL + "product", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        if (!res.error) {
          setData(res);
        } else {
          console.log("Error al obtener los datos");
        }
      });
  }, []);
  return (
    <main
      className={`lg:m-l-63 ${
        state.oculto && "min-main"
      } relative min-h-screen`}
    >
      <div>
        <h2 className="w-full font-bold text-3xl p-2 mb-4">
          Admin | Productos
        </h2>
      </div>
      <ProductsSection data={data} setData={setData} />
    </main>
  );
};

export default Products;
