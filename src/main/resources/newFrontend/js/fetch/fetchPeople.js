const URL_PEOPLE = 'http://localhost:8080/people'

async function getAllPeople() {
    const response = await fetch(URL_PEOPLE);
    return await response.json();
}

async function getPersonById(id) {
    const response = await fetch(URL_PEOPLE + "/" + id);
    return await response.json();
}

async function postPerson(person){
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person)
    }
    const response = await fetch(URL_PEOPLE, config);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        //
    }
}

async function putPerson(post, id){
    const config = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    }
    const response = await fetch(URL_PEOPLE + "/" + id, config);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        //
    }
}

async function deletePerson(id){
    const config = {
        method: 'DELETE'
    }
    const response = await fetch(URL_PEOPLE + "/" + id, config);
    if (response.ok) {
        console.log(response)
    } else {
        //
    }
}

function hrefPerson(id){
    return "person.html?person="+id;
}
