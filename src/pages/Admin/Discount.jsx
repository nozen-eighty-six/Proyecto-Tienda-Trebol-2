import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import helpHttpT from "../../hooks/helpHttpT";
import { SERVER_URL } from "../../Const/server";
import { TOKEN } from "../../Const/token";
import DiscountSection from "../../components/Admin/discountSection/DiscountSection";

const Discount = () => {
  const state = useSelector((state) => state.cloud);
  const [data, setData] = useState([]);

  useEffect(() => {
    helpHttpT()
      .get(SERVER_URL + "discount", {
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
        <h2 className="w-full text-3xl font-bold p-2 mb-4">
          Admin | Descuentos
        </h2>
      </div>
      <DiscountSection data={data} setData={setData} />
    </main>
  );
};

export default Discount;
