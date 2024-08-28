import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import helpHttpT from "../../hooks/helpHttpT";
import { SERVER_URL } from "../../Const/server";
import { TOKEN } from "../../Const/token";
import SubCategorySection from "../../components/Admin/subCategorySection/SubCategorySection";

const SubCategory = () => {
  const state = useSelector((state) => state.cloud);
  const [data, setData] = useState([]);

  useEffect(() => {
    helpHttpT()
      .get(SERVER_URL + "subCategory", {
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
        <h2 className="w-full p-2 mb-4 font-bold text-3xl">
          Admin | SubCategorías
        </h2>
      </div>
      <SubCategorySection data={data} setData={setData} />
    </main>
  );
};

export default SubCategory;
