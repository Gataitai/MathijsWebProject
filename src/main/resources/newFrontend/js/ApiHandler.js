const URL = 'http://localhost:8080/'

async function getJson(endpoint) {
    const url = URL + endpoint;
    const response = await fetch(url);
    return await response.json();
}