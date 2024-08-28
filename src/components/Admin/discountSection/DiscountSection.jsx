import { useState } from "react";
import LoaderComponent from "../../Reusable/LoaderComponent";
import DiscountItem from "./DiscountItem";
import ProductDiscountModal from "./ProductDiscountModal";
import SearchCreationSection from "../userSection/SearchCreationSection";

const DiscountSection = ({ data, setData }) => {
  const [modalProductDiscount, setModalProductDiscount] = useState(false);
  const [discountId, setDiscountId] = useState(null);
  return (
    <>
      <SearchCreationSection controller={"discount"} setData={setData} />
      <table className="table table-striped table-bordered w-full  h-4/6 bg-white  text-start shadow-sm ">
        <thead>
          <tr>
            <th className=" ">Número</th>
            <th className="">Producto</th>

            <th className=" ">Descuento {"(%)"}</th>
            <th className=" ">Fecha Inicio</th>
            <th className=" ">Fecha Fin</th>
            <th></th>
          </tr>
        </thead>
        {/*Falta seguir con los estilos para las diferentes secciones  */}
        <tbody>
          {data.length > 0 ? (
            data.map((dis) => (
              <DiscountItem
                element={dis}
                key={dis.idDiscount}
                setDiscountId={setDiscountId}
                setModalProductDiscount={setModalProductDiscount}
              />
            ))
          ) : (
            <LoaderComponent loading={true} />
          )}
        </tbody>
      </table>
      <ProductDiscountModal
        modalProductDiscount={modalProductDiscount}
        setModalProductDiscount={setModalProductDiscount}
        discountId={discountId}
      />
    </>
  );
};

export default DiscountSection;
