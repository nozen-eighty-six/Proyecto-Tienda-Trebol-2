import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import helpHttpT from "../../hooks/helpHttpT";
import { SERVER_URL } from "../../Const/server";
import { TOKEN } from "../../Const/token";
import SearchCreationSection from "../../components/Admin/userSection/SearchCreationSection";
import SupplierSection from "../../components/Admin/supplierSection/SupplierSection";

const Suppliers = () => {
  const stateCloud = useSelector((state) => state.cloud);
  const [data, setData] = useState([]);

  useEffect(() => {
    helpHttpT()
      .get(SERVER_URL + "supplier", {
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
        stateCloud.oculto && "min-main"
      } relative min-h-screen`}
    >
      {" "}
      <div>
        <h2 className="w-full p-2 text-3xl font-bold mb-4">
          Admin | Proveedores
        </h2>
        <SupplierSection data={data} setData={setData} />
      </div>
    </main>
  );
};

export default Suppliers;
