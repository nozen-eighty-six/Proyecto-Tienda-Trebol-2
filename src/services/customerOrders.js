import { SERVER_URL } from "../Const/server";
import { TOKEN } from "../Const/token";
import { dateFormat } from "./dateFormat";
import { savePayment } from "./paymentService";
import { saveShipment } from "./shipmentService";

export async function saveCustomerOrder(customer, products) {
  const url = SERVER_URL + "order";

  let convertDate = dateFormat(new Date());
  let amount = products.reduce((act, pro) => act + pro.price, 0);
  console.log(customer);
  let body = {
    usuario: {
      ...customer,
    },
    created_at: convertDate,
    status: "Realizado",
    total_amount: amount,
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
  //console.log(data);
  /*if (data) {
    await saveOrderDetail(data, products);
    await savePayment(data, amount);
    await saveShipment(data, dateFormat(new Date()));
  }*/
  return data;
}

//Me falta verificar que se guarden los detalles de la orden
export async function saveOrderDetail(order, products) {
  const url = SERVER_URL + "order-detail";
  console.log(order);
  console.log(products);
  let productsDetail = [];

  products.forEach((pro) => {
    let detail = {
      customerOrder: {
        ...order,
      },
      product: {
        ...pro,
      },
      quantity: pro.quantity,
      price: pro.price,
    };

    productsDetail.push(detail);
  });

  let response = await fetch(url, {
    body: JSON.stringify(productsDetail),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  //let data = await response.json();
  //console.log(data);
}
