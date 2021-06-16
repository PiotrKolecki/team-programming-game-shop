import config from "../../config";

async function fetchCatalogue() {
  const response = await fetch(`${config.api.baseUrl}/games`);
  const result = await response.json();

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

export interface deleteItemsFromCartPayload {
  id: number;
  token: string;
  product_id: number
}

export interface addGamePayload {
  title: string, 
  publisher: string, 
  price: number, 
  quantity: number, 
  category: string, 
  description: string,
  token: string
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
        'Authorization': `Bearer ${token}`
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
        'Authorization': `Bearer ${token}`
    },
});
  const result = await response.json();

  return result;
}


async function deleteItemFromCart({ id, token, product_id}: deleteItemsFromCartPayload) {
  const data = { "product_id": product_id,
  "quantity": 1,
  "operation": "Remove" };


  const response = await fetch(`${config.api.baseUrl}/shoppingcart/${id}`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
});
  const result = await response.json();

  return result;
}

async function addGame(payload: addGamePayload) {
  const {title, publisher, price, quantity, category, description, token} = payload;
  const data = {product_name: title, publisher, price, quantity, category, description, date_published: "2020-10-10",
   short_description: "This is a game.", active: true, coverUrl: "cover.jpg"};
  const response = await fetch(`${config.api.baseUrl}/games`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
});
  const result = await response.json();

  return result;
}

export { fetchCatalogue, addItemToCart, getItemsFromCart, deleteItemFromCart, addGame };
