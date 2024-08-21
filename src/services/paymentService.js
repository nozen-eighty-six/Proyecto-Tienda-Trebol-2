import { SERVER_URL } from "../Const/server";
import { TOKEN } from "../Const/token";

export const savePayment = async (customerOrder, amount) => {
  const url = SERVER_URL + "payment";

  let fechaHoy = new Date();
  let convertDate = fechaHoy.toISOString().slice(0, 10).replace("T", " ");
  let body = {
    customerOrder: {
      ...customerOrder,
    },
    paymentMethod: {
      idPaymentMethod: 1,
      name: "Paypal",
      description: "Método de pago digital",
    },
    payment_date: convertDate,
    amount: amount,
    status: "Realizado",
  };

  let response = await fetch(url, {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  let data = await response.json();
  console.log(data);
};
