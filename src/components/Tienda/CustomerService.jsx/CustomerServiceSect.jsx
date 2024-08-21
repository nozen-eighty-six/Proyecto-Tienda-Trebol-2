import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomerServiceForm from "./CustomerServiceForm";
import "react-lazy-load-image-component/src/effects/opacity.css";
import LoaderComponent from "../../Reusable/LoaderComponent";
import { useState } from "react";
import CartItemAlert from "../Cart/CartItemAlert";

const CustomerServiceSect = () => {
  const [loading, setLoading] = useState(false);
  const [statusFormCustomer, setStatusFormCustomer] = useState();
  return (
    <div className="w-full h-screen flex justify-center items-center relative ">
      <div className="w-85 h-full flex flex-col ">
        <div className="w-full h-1/6 text-center text-4xl font-bold flex justify-center items-center">
          <h2>Atención al cliente</h2>
        </div>
        <div className=" relative flex flex-row w-full  h-5/6 border border-black  ">
          <span className="w-2/5 h-full border border-r-black ">
            <LazyLoadImage
              src="/img/service_customer.webp"
              alt="Atención al cliente"
              effect="opacity"
              className="w-full h-full  "
              width={"100%"}
              height={"100%"}
            />
          </span>
          <CustomerServiceForm
            setLoading={setLoading}
            setStatusFormCustomer={setStatusFormCustomer}
          />
          <LoaderComponent loading={loading} />
        </div>
      </div>
      <CartItemAlert
        statusFormCustomer={statusFormCustomer}
        setStatusFormCustomer={setStatusFormCustomer}
      />
    </div>
  );
};

export default CustomerServiceSect;
