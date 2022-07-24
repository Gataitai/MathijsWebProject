const URL_PEOPLE = 'http://localhost:8080/people'

// function getAllPeople(){
//     let obj;
//     fetch(URL_PEOPLE)
//     .then(res => res.json())
//     .then(data => obj = data);

//     return obj;
// }

async function getAllPeople(){
    const response = await fetch('http://localhost:8080/people');
    const json = await response.json();
    return json;
}


