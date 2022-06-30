const URL_COMMENTS = 'http://localhost:8080/comments'

getAllPeople()

function putComment(comment){
    prsn.name = document.getElementById("editPersonName").value;
    closeModal();

    fetch(URL_PEOPLE,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(prsn)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success', result);
        getAllPeople()
    })
    .catch(error => {
        console.error('Error', error);
    })
}

function buildPersonEditForm(prsn){

    let editContainer = document.createElement("div");
    editContainer.classList.add("editContainer");

    let nameLabel = document.createElement("label");
    
    nameLabel.appendChild(document.createTextNode("Name"));
    editContainer.appendChild(nameLabel);

    let personName = document.createElement("input");
    personName.setAttribute("id", "editPersonName");
    personName.value = prsn.name
    editContainer.appendChild(personName);

    let submitBtn = document.createElement("button");
    submitBtn.appendChild(document.createTextNode("Edit"))
    submitBtn.addEventListener('click', () => putPerson(prsn))
    editContainer.appendChild(submitBtn);

    openModal(editContainer);
}