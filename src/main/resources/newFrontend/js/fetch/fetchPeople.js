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

function hrefPerson(id){
    return "person.html?person="+id;
}
