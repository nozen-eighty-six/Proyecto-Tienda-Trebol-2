import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import helpHttpT from "../../hooks/helpHttpT";
import { SERVER_URL } from "../../Const/server";
import { TOKEN } from "../../Const/token";
import SearchCreationSection from "../../components/Admin/userSection/SearchCreationSection";
import StoreEntraceTable from "../../components/Admin/storeEntraceSection/StoreEntraceTable";

const StoreEntrace = () => {
  const state = useSelector((state) => state.cloud);
  const [data, setData] = useState([]);

  useEffect(() => {
    helpHttpT()
      .get(SERVER_URL + "store-entrace", {
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
  });
  return (
    <main className={`lg:m-l-63`}>
      <div>
        <h2 className="w-full text-3xl font-bold p-2 mb-4">Admin | Entradas</h2>
      </div>
      <SearchCreationSection />
      <StoreEntraceTable data={data} />
    </main>
  );
};

export default StoreEntrace;
