import { useEffect, useState } from "react";
import { SERVER_URL } from "../../../Const/server";
import ProductsFound from "./ProductsFound";
import { TOKEN } from "../../../Const/token";

const SearchResult = ({ focus, name }) => {
  const [data, setData] = useState([]);
  {
    /*Me falta traer algunos productos, y aquellos que coincidan
    con la búsqueda.
    */
  }

  useEffect(() => {
    const getProducts = async (searched) => {
      try {
        const url =
          SERVER_URL + "product" + (searched ? `/filtrar/${searched}` : "");
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + TOKEN,
          },
        });
        if (!response.ok) {
          throw new Error("Error en la petición");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts(name);
  }, [name]);

  return (
    <div className={` z-100 absolute  w-full top-10`}>
      <div
        className={`bg-white border p-4  border-white ${
          focus == true && "rounded-br-2xl rounded-bl-2xl"
        }`}
      >
        {data.length > 0 ? (
          data.map((product) => (
            <ProductsFound key={product.id} data={product} />
          ))
        ) : (
          <div className="w-full flex justify-center items-center">
            <svg
              width="100"
              height="100"
              viewBox="0 0 44 44"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
            >
              <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx="22" cy="22" r="1">
                  <animate
                    attributeName="r"
                    begin="0s"
                    dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="0s"
                    dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="22" cy="22" r="1">
                  <animate
                    attributeName="r"
                    begin="-0.9s"
                    dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="-0.9s"
                    dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </div>
        )}
        {/*Aquí puedo indicar que mientras traiga , que cargue un loader
         */}
      </div>
    </div>
  );
};

export default SearchResult;
