import { useState } from "react";
import helpHttpT from "../../../hooks/helpHttpT";
import { SERVER_URL } from "../../../Const/server";
import { TOKEN } from "../../../Const/token";

const initialForm = {
  search: "",
};

const SearchCreationSection = ({ controller, setData }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const search = () => {
    if (form.search === undefined) {
      alert("Ingrese un valor para buscar");
      return;
    }
    if (form.search == "") {
      helpHttpT()
        .get(SERVER_URL + controller, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then((res) => {
          if (!res.error) {
            if (res.length == 0) {
              setForm(initialForm);
              alert("No se encontraron resultados");
              return;
            }
            setData(res);
            setForm(initialForm);
          } else {
            console.log("Error al obtener los datos");
          }
        });
    } else {
      helpHttpT()
        .get(SERVER_URL + controller + "/search/" + form.search, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then((res) => {
          if (!res.error) {
            if (res.length == 0) {
              setForm(initialForm);
              alert("No se encontraron resultados");
              return;
            }
            setData(res);
            setForm(initialForm);
          } else {
            console.log("Error al obtener los datos");
          }
        });
    }
  };

  return (
    <section className="w-full my-3 h-1/5 flex justify-between">
      <div className="w-1/2  flex gap-2">
        <input
          type="text"
          name="search"
          placeholder="Buscar..."
          value={form.search || ""}
          onChange={handleChange}
          className="w-3/5 h-10 border-2 outline-none border-gray-300 rounded-sm pl-2"
        />
        <button
          className="bg-gray-400/80 text-white rounded-sm h-10 w-32 outline-none"
          onClick={search}
        >
          Buscar
        </button>
      </div>

      <div>
        <button className="bg-black text-white rounded-sm h-10 w-32">
          Crear
        </button>
      </div>
    </section>
  );
};

export default SearchCreationSection;
