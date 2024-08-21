import { useState } from "react";
import SearchResult from "./SearchResult";

const BuscadorProducto = () => {
  const [focus, setFocus] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = () => {
    setFocus(!focus);
  };
  return (
    <>
      <form className="box-border h-full w-5/6 flex justify-between items-center ">
        <div className="w-full h-2/4   flex justify-center items-center relative">
          <input
            className={`w-full h-5/6 font-light placeholder:text-white outline-none text-white bg-transparent border-white border hover:border-2
                  ps-4 pb-1 ${
                    focus == true
                      ? " rounded-se-3xl rounded-ss-3xl"
                      : "rounded-full"
                  }
                  `}
            type="text"
            name="product"
            id=""
            value={form.product}
            onChange={handleChange}
            placeholder="Busca un producto, ej. leche"
            onFocus={() => handleFocus()}
            onBlur={() => handleFocus()}
          />

          <button
            className={`bg-white absolute end-0 h-5/6 w-12 ${
              focus == true ? "rounded-se-3xl" : "rounded-r-full"
            }`}
          >
            <div className="flex justify-center items-center">
              <svg
                className="w-5 fill-current text-red-500 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="5 5 14 14"
              >
                <path
                  fill="currentColor"
                  d="m15.683 14.6 3.265 3.265a.2.2 0 0 1 0 .282l-.8.801a.2.2 0 0 1-.283 0l-3.266-3.265a5.961 5.961 0 1 1 1.084-1.084zm-4.727 1.233a4.877 4.877 0 1 0 0-9.754 4.877 4.877 0 0 0 0 9.754z"
                ></path>
              </svg>
            </div>
          </button>
          {focus == true && <SearchResult focus={focus} name={form.product} />}
        </div>
      </form>
    </>
  );
};

export default BuscadorProducto;
