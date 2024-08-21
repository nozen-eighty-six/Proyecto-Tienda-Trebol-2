import { useState } from "react";
import { useForm } from "../../../hooks/useForm";

const validationForm = (form) => {
  let errors = {};
  if (!form.name) {
    errors.name = "El nombre es obligatorio";
  }
  if (!form.lastName) {
    errors.lastName = "El apellido es obligatorio";
  }
  if (!form.email) {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "El email es incorrecto";
  }
  if (!form.phone) {
    errors.phone = "El teléfono es obligatorio";
  } else if (!/^\d{9}$/.test(form.phone)) {
    errors.phone = "El teléfono es incorrecto";
  }
  if (!form.message) {
    errors.message = "El mensaje es obligatorio";
  }
  return errors;
};

const CustomerServiceForm = ({ setLoading, setStatusFormCustomer }) => {
  const [form, setForm] = useState({});
  const [validForm, setValidForm] = useState(true);
  const { error, handleBlur, setError } = useForm(validationForm, form);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    handleBlur(e);

    if (Object.keys(error).length == 0) {
      setValidForm(false);
    }
  };

  const initialForm = () => {
    setForm({});
    setError({});
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const url = "https://formsubmit.co/ajax/yuushaescalante@gmail.com";

      setLoading(true);

      const response = await fetch(url, {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setLoading(false);
        alert("Error al enviar el formulario");
        throw new Error("Error al enviar el formulario");
      }

      const data = await response.json();

      if (data) {
        console.log("Formulario enviado correctamente");
        initialForm();
        setLoading(false);
        setStatusFormCustomer({
          error: false,
          message: "Formulario enviado correctamente",
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setStatusFormCustomer({
        error: true,
        message: "Error al enviar el formulario",
      });
    }
  };
  return (
    <section className="w-3/5  flex flex-col justify-center gap-9 p-4 items-center ">
      <div className="w-3/4 flex flex-col gap-5">
        <h2 className="text-3xl font-bold">¡Estamos para ayudar!</h2>
        <p className="text-justify font-bold">
          Rellena el formulario con cualquier tema que tengas y te responderemos
          lo antes posible
        </p>
      </div>
      <form className="w-3/4 h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full  gap-4 ">
          <div className="w-full flex">
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                className="border border-black border-r-0 p-2 outline-none "
                name="name"
                value={form.name || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ingresa tu nombre"
              />
              <label htmlFor="" className="text-xs custom-red-text">
                {error.name || ""}
              </label>
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="">Apellido</label>
              <input
                type="text"
                className="border border-black p-2 outline-none"
                name="lastName"
                value={form.lastName || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ingresa tu apellido"
              />
              <label htmlFor="" className="text-xs custom-red-text">
                {error.lastName || ""}
              </label>
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="border border-black border-r-0 p-2 outline-none"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ingresa tu email"
              />
              <label htmlFor="" className="text-xs custom-red-text">
                {error.email || ""}
              </label>
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="">Teléfono</label>
              <input
                type="text"
                className="border border-black p-2 outline-none"
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ingresa tu teléfono"
              />
              <label htmlFor="" className="text-xs custom-red-text">
                {error.phone}
              </label>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 h-1/6">
            <label htmlFor="">Déjanos un mensaje</label>
            <textarea
              name="message"
              id=""
              className="w-full h-28 border border-black outline-none ps-1"
              value={form.message || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ resize: "none" }}
            ></textarea>
            <label htmlFor="" className="text-xs custom-red-text">
              {error.message || ""}
            </label>
          </div>

          <div className="w-full h-16 flex items-start ">
            <button
              className={`custom-red text-white outline-none px-10 py-1 rounded-full ${
                validForm ? "opacity-40" : ""
              }`}
              disabled={validForm}
              title={validForm ? "Completa el formulario" : ""}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CustomerServiceForm;
