import { useSelector } from "react-redux";
import { createOrder, getAccessToken } from "../../../services/paypalService";

const CheckoutButton = ({ completePurchase }) => {
  const clientId =
    "AZL2RVYM42N20WVnOsQ7Qp2t6qUD-AQXyagy8Mc8VWIZCa9dYqe3jTs-FHyyrbHwDQ1AKeeffaQkjv2A";
  const secret =
    "EGjo6TIh_dh9HxJB00Op1mfuo0rWHu7X_fH-zfjp7LlJtS__uTJNQUlwy26uoQ9GDOApvbhhFZ_KQdj5";

  const state = useSelector((state) => state.carrito);

  const handlePayment = async () => {
    try {
      // Obtener Access Token
      const accessToken = await getAccessToken(clientId, secret);

      // Crear una orden
      const order = await createOrder(accessToken, state.totalPrice);
      console.log("Order created:", order);

      // Redirigir al usuario para aprobar el pago
      window.location.href = order.links.find(
        (link) => link.rel === "approve"
      ).href;

      // Nota: Después de la redirección, capturarías el pago en la URL de retorno.
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <>
      <button
        className={`custom-red w-full p-2 rounded-full text-white text-sm ${
          completePurchase && "disabled:opacity-50"
        }`}
        onClick={handlePayment}
        disabled={completePurchase}
        aria-label="Completar el formulario de envio antes de finalizar la compra"
        title="Completar el formulario de envio antes de finalizar la compra"
      >
        Finalizar compra
      </button>
    </>
  );
};

export default CheckoutButton;
