import { useSelector } from "react-redux";
import SearchCreationSection from "../../components/Admin/userSection/SearchCreationSection";
import SupplierOrderTable from "../../components/Admin/OrderSection/SupplierOrderTable";
import { useEffect, useState } from "react";
import helpHttpT from "../../hooks/helpHttpT";
import { SERVER_URL } from "../../Const/server";

const SupplierOrder = () => {
  const state = useSelector((state) => state.cloud);
  const [data, setData] = useState([]);

  useEffect(() => {
    helpHttpT()
      .get(SERVER_URL + "supplier-order")
      .then((res) => {
        if (!res.error) {
          setData(res);
        } else {
          console.log(res);
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
        <h2 className="w-full text-3xl font-bold p-2 mb-4">Admin | Órdenes</h2>
      </div>
      <SearchCreationSection />
      <SupplierOrderTable data={data} />
    </main>
  );
};

export default SupplierOrder;
