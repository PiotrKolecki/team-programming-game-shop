async function fetchCatalogue() {
    const response = await fetch('http://35.232.212.214/api/games');
    let result = await response.text();
    
    return result;
}

export { fetchCatalogue };