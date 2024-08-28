import { useEffect, useState } from "react";
import helpHttpT from "../../../hooks/helpHttpT";
import { SERVER_URL } from "../../../Const/server";
import { TOKEN } from "../../../Const/token";
import LoaderComponent from "../../Reusable/LoaderComponent";

const ProductDiscountModal = ({
  modalProductDiscount,
  setModalProductDiscount,
  discountId,
}) => {
  const [data, setData] = useState([]);

  const closeModal = () => {
    setModalProductDiscount(false);
  };

  useEffect(() => {
    console.log(discountId);
    helpHttpT()
      .get(SERVER_URL + "product/product-discount/" + discountId, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        if (!res.error) {
          setData(res);
        } else {
          console.log(res);
        }
      });
  }, [discountId]);

  return (
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 flex justify-center bg-black/40 items-center transition ${
        modalProductDiscount ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-1/2 h-2/3  ">
        <table className="relative table table-striped table-bordered w-full   m-0 bg-white border-0 rounded-md text-start shadow-sm">
          <thead>
            <tr>
              <th className="p-2 ">Nombre</th>
              <th className="p-2">Descripción</th>
              <th className=" p-2">Precio</th>
              <th className=" p-2">Precio {"(Descuento)"}</th>
            </tr>
          </thead>
          <tbody className="m-0 h-full">
            {data.length > 0 ? (
              data.map((prod) => {
                return (
                  <>
                    {" "}
                    <tr key={prod.idProduct} className="border h-1/6  ">
                      <td className="ps-2 pt-2 pb-2">{prod.name}</td>
                      <td className="ps-2 pt-2 pb-2">{prod.description}</td>
                      <td className="ps-2 pt-2 pb-2">{prod.price}</td>
                      <td className="ps-2 pt-2 pb-2">
                        {(
                          prod.price -
                          prod.price * prod.discount.discountValue
                        ).toFixed(2)}
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <tr className="relative h-1/6 ">
                <div className="absolute w-full  bg-white text-center">
                  No hay productos
                </div>
              </tr>
            )}
          </tbody>
          <button
            className="absolute -top-10 -right-4 text-4xl font-bold"
            onClick={closeModal}
          >
            X
          </button>
        </table>
      </div>
    </div>
  );
};

export default ProductDiscountModal;
