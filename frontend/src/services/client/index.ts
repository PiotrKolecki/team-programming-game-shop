import config from "../../config";

async function fetchCatalogue() {
  const response = await fetch(`${config.api.baseUrl}/games`);
  const result = await response.text();

  return result;
}

export interface addToCartPayload {
  id: number;
  product_id: number,
  quantity: number
  token: string,
}

export interface getItemsFromCartPayload {
  id: number;
  token: string;
}

async function addItemToCart({ id, product_id, quantity, token }: addToCartPayload) {
  const data = { "product_id": product_id,
                "quantity": quantity,
                "operation": "Add" };

  const response = await fetch(`${config.api.baseUrl}/shoppingcart/${id}`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    },
    body: JSON.stringify(data)
});
  const result = await response.json();

  return result;
}

async function getItemsFromCart({ id, token }: getItemsFromCartPayload) {


  const response = await fetch(`${config.api.baseUrl}/shoppingcart/${id}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    },
});
  const result = await response.json();

  return result;
}

export { fetchCatalogue, addItemToCart, getItemsFromCart };
