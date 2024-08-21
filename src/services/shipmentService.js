/*Agregar la lógica para poder guardar la dirección del cliente
en la bd, para hacerlo en la interface a la hora de hacer el pedido

*/

import { SERVER_URL } from "../Const/server";
import { TOKEN } from "../Const/token";
import { dateFormat } from "./dateFormat";

export async function saveShipment(
  customerOrder,
  estimadeDeliveryDate,
  shippingAddress
) {
  const url = SERVER_URL + "shipment";
  let now = dateFormat(new Date());

  let body = {
    customerOrder: {
      ...customerOrder,
    },
    shipment_date: now,
    estimated_delivery_date: estimadeDeliveryDate,
    status: "En camino",
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

  if (data) {
    await saveShipmentAddress(
      data,
      customerOrder.usuario,
      shippingAddress.address,
      shippingAddress.city,
      shippingAddress.district
    );
  }
}

async function saveShipmentAddress(shipment, user, address, city, disctric) {
  const url = SERVER_URL + "shipment-address";
  let body = {
    usario: {
      ...user,
    },
    address: address,
    city: city,
    distric: disctric,
    shipment: { ...shipment },
  };

  let response = await fetch(url, {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  //  let data = await response.json();
}
