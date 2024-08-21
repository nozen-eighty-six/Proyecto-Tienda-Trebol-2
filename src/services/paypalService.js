// services/paypalService.js

export async function getAccessToken(clientId, secret) {
  const auth = btoa(`${clientId}:${secret}`);
  const response = await fetch(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    }
  );

  const data = await response.json();
  return data.access_token;
}

export async function createOrder(accessToken, amount) {
  const response = await fetch(
    "https://api-m.sandbox.paypal.com/v2/checkout/orders",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount,
            },
          },
        ],
        application_context: {
          return_url: "http://localhost:5173/payment-success",
          cancel_url: "https://tuaplicacion.com/payment-cancel",
        },
      }),
    }
  );

  const data = await response.json();
  return data;
}

export const getOrderDetails = async (orderId, accessToken) => {
  const response = await fetch(
    `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Error fetching order details: ${response.status} ${
        response.statusText
      } - ${errorData.message || ""}`
    );
  }

  return response.json();
};
export async function capturePayment(orderId, accessToken) {
  try {
    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Asegúrate de que este token es válido
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error capturing payment: ${response.status} ${response.statusText} - ${
          errorData.message || ""
        }`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in capturePayment:", error);
    throw error; // Re-lanzar el error para que se maneje en el lugar donde se llama a esta función
  }
}
