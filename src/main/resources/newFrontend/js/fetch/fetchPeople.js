const URL_PEOPLE = 'http://localhost:8080/people'

async function getAllPeople() {
    const response = await fetch(URL_PEOPLE);
    const json = await response.json();
    return json;
}

async function getPersonById(id) {
    const response = await fetch(URL_PEOPLE + "/" + id);
    const json = await response.json();
    return json;
}
