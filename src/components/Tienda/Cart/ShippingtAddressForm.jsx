import { useEffect, useState } from "react";
import DistrictOption from "../Home/DistrictOption";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../../redux/ShippingAddressSlice";

const ShippingtAddressForm = ({
  formSipping,
  setFormShipping,
  openForm,
  setOpenForm,
  handleBlur,
  error,
  setError,
  setCompletePurchase,
  completePurchase,
}) => {
  const state = useSelector((state) => state.shippingAddress);
  const dispatch = useDispatch();
  const [dataDistrict, setDataDistrict] = useState([]);

  const handleForm = (e) => {
    setFormShipping({
      ...formSipping,
      city: "Lima",
      [e.target.name]: e.target.value,
    });
    handleBlur(e);
    console.log(error);
  };

  const closeForm = () => {
    setFormShipping({
      name: "",
      city: "Lima",
      district: "default",
      address: "",
    });
    setOpenForm(!openForm);
    setError({});
    setCompletePurchase(true);
  };

  const getDistricts = async () => {
    try {
      let url =
        "https://bogota-laburbano.opendatasoft.com/api/explore/v2.1/catalog/datasets/distritos-peru/records?limit=44&refine=nombdep%3A%22LIMA%22&refine=nombprov%3A%22LIMA%22";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const dataDistrict = data.results.map((distri) => {
          return distri.nombdist;
        });
        setDataDistrict(dataDistrict);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const saveShipping = () => {
    if (Object.keys(error).length === 0) {
      setCompletePurchase(false);
      setOpenForm(!openForm);
      JSON.stringify(
        localStorage.setItem("shippingAddressForm", JSON.stringify(formSipping))
      );
      dispatch(saveShippingAddress(formSipping));
    }
  };

  useEffect(() => {
    getDistricts();
  }, []);

  {
    /*Me falta estilar el formulario - DONE 
    Validaciones - DONE
    Guardar en la base de datos la invormación de envió - TO DO
    Procesar el pago - TO DO
    */
  }
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/60 flex justify-center items-center transition ${
        openForm == false
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="w-1/3 h-3/4 relative bg-white rounded-md">
        <form className="w-full h-full" onSubmit={handleSubmit}>
          <div className="w-full h-1/5 p-4 flex justify-center items-center">
            <h2 className="text-center font-bold text-2xl">Shipping Address</h2>
          </div>
          {/*Body */}
          <div className="w-full h-3/5  flex justify-center items-center flex-wrap text-sm">
            {"Me falta que cuando haya errores, estos se muestren en pantalla"}
            <div className="flex flex-col items-center w-1/2 h-1/4 gap-2 ps-1 ">
              <label htmlFor="" className="font-bold ps-2 w-85">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formSipping.name || ""}
                onChange={handleForm}
                onBlur={handleBlur}
                placeholder="Ingresa tu nombre"
                className="w-85 p-2 outline-none border border-t-white border-r-white border-l-white border-b-black"
              />
              <label htmlFor="" className="text-xs font-bold custom-red-text">
                {error.name || ""}
              </label>
            </div>
            <div className="flex flex-col items-center w-1/2 h-1/4  gap-2 ps-1 ">
              <label htmlFor="" className="font-bold ps-2 w-85">
                Departamento
              </label>
              <input
                type="text"
                name="city"
                value={"Lima"}
                className="w-85 p-2 outline-none border border-t-white border-r-white border-l-white border-b-black"
                disabled
              />
            </div>
            <div className="flex flex-col items-center w-1/2 h-1/4  gap-2 ps-1 ">
              <label htmlFor="" className="font-bold ps-2 w-85">
                Distrito
              </label>
              <DistrictOption
                data={dataDistrict}
                handleChange={handleForm}
                form={formSipping}
                handleBlur={handleBlur}
              />
              <label htmlFor="" className="text-xs font-bold custom-red-text">
                {error.district || ""}
              </label>
            </div>
            <div className="flex flex-col items-center w-1/2 h-1/4  gap-2 ps-1 ">
              <label htmlFor="" className="font-bold ps-2 w-85">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                value={formSipping.address || ""}
                onChange={handleForm}
                onBlur={handleBlur}
                placeholder="Ingresa tu dirección"
                className="w-85 p-2 outline-none border border-t-white border-r-white border-l-white border-b-black"
              />
              <label htmlFor="" className="text-xs font-bold custom-red-text">
                {error.address || ""}
              </label>
            </div>
          </div>
          {/*Footer */}
          <div className="w-full h-1/5 flex justify-center items-center ">
            <button
              className="w-1/2 h-1/2 custom-red text-white text-lg font-bold rounded-md"
              onClick={saveShipping}
            >
              Guardar
            </button>
          </div>
        </form>
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-2xl text-black"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ShippingtAddressForm;
