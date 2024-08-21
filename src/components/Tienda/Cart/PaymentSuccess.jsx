import { useEffect, useState } from "react";
import {
  capturePayment,
  getAccessToken,
  getOrderDetails,
} from "../../../services/paypalService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  saveCustomerOrder,
  saveOrderDetail,
} from "../../../services/customerOrders";
import { savePayment } from "../../../services/paymentService";
import { saveShipment } from "../../../services/shipmentService";
import { dateFormat } from "../../../services/dateFormat";
import { clear } from "../../../redux/ShoppingSlice";

const PaymentSuccess = ({ match }) => {
  const clientId =
    "AZL2RVYM42N20WVnOsQ7Qp2t6qUD-AQXyagy8Mc8VWIZCa9dYqe3jTs-FHyyrbHwDQ1AKeeffaQkjv2A";
  const secret =
    "EGjo6TIh_dh9HxJB00Op1mfuo0rWHu7X_fH-zfjp7LlJtS__uTJNQUlwy26uoQ9GDOApvbhhFZ_KQdj5";
  const state = useSelector((state) => state.user);
  const stateShoppingCart = useSelector((state) => state.carrito);
  const stateShippingAddress = useSelector((state) => state.shippingAddress);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  const [orderCaptured, setOrderCaptured] = useState(false);
  const [hasCaptured, setHasCaptured] = useState(false);

  useEffect(() => {
    console.log("useEffect executed");

    if (hasCaptured) return; // Salir si ya se ha capturado el pedido

    const captureOrder = async () => {
      try {
        if (!orderCaptured) {
          const accessToken = await getAccessToken(clientId, secret);
          const orderId = new URLSearchParams(window.location.search).get(
            "token"
          );
          console.log("accessToken:", accessToken);
          console.log("Capturing payment for orderId:", orderId);

          const captured = await capturePayment(orderId, accessToken);
          console.log("Payment captured:", captured);

          if (captured.status === "COMPLETED") {
            try {
              let data = await saveCustomerOrder(
                state.usuario,
                stateShoppingCart.products
              );
              if (data) {
                await saveOrderDetail(data, stateShoppingCart.products);
                await savePayment(data, stateShoppingCart.totalPrice);
                await saveShipment(
                  data,
                  dateFormat(new Date()),
                  stateShippingAddress.shippingAddressForm
                );
                dispatch(clear());

                //Faltaría que se quiten los productos del carrito -TO DO
                //agregar un elemento que diga "Carrito vacío" TO DO
              }

              console.log("Order saved successfully");
              setOrderCaptured(true);
              setHasCaptured(true);
              setShowModal(true);
            } catch (dbError) {
              console.error("Error saving customer order:", dbError);
            }
          }
        }
      } catch (error) {
        console.error("Error capturing payment:", error);
      }
    };

    captureOrder();
  }, [hasCaptured]);

  return (
    <>
      {showModal == true && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-1/4 h-1/4 flex flex-col justify-center items-center bg-white p-4 rounded-lg relative">
            <h2 className="text-xl font-bold">¡Pago realizado!</h2>
            <p>Gracias por tu compra.</p>
            <button
              className=" font-bold text-xl outline outline-red-600 text-black p-2 rounded-lg"
              onClick={back}
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentSuccess;
