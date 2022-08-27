const URL_PEOPLE = 'http://localhost:8080/people'

async function getAllPeople() {
    const response = await fetch(URL_PEOPLE);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving people");
    }
}

async function getPeopleByName(name) {
    const response = await fetch(URL_PEOPLE + "/name?name=" + name);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving people by name");
    }
}

async function getPersonById(id) {
    const response = await fetch(URL_PEOPLE + "/" + id);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving person by id");
    }
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
        console.log("Something went wrong with posting person");
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
        console.log("Something went wrong with updating person");
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
        console.log("Something went wrong with deleting person");
    }
}

function hrefPerson(id){
    return "person.html?person="+id;
}
