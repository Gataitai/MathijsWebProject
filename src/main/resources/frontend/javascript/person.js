const URL_PEOPLE = 'http://localhost:8080/people'

getAllPeople()

async function getAllPeople() {
    const response = await fetch(URL_PEOPLE);
    const json = await response.json();


    //empty list before fetch
    document.getElementById("stickyContainer").replaceChildren();
    for(let prsn of json){

        let personSection = document.getElementById("stickyContainer");

        let personCard = document.createElement("div");
        personCard.classList.add("card");
    
        let personChip = document.createElement("div");
        personChip.classList.add("personChip");
        personChip.appendChild(document.createTextNode(prsn.name));

        let personImg = document.createElement("img");
        let img = "pictures/" + prsn.photoId + ".png"
        personImg.setAttribute("src", img);
        personChip.appendChild(personImg);

        let editBtn = document.createElement("span");
        editBtn.classList.add("editButton");
        editBtn.addEventListener('click', () => buildPersonEditForm(prsn))

        let icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-edit");
        editBtn.appendChild(icon);
        personChip.appendChild(editBtn);

        personCard.appendChild(personChip);
        
        personSection.appendChild(personCard);
    }
}

function putPerson(prsn){
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