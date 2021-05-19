import config from "../../config";

async function fetchCatalogue() {
  const response = await fetch(`${config.api.baseUrl}/games`);
  const result = await response.text();

  return result;
}

export { fetchCatalogue };
