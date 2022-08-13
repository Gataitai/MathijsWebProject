selectPersonForm();

async function selectPersonForm() {
    closeModal();
    let content = document.createElement("div");

    for (let person of await getAllPeople()) {
        let personCard = newPickPersonCard(person);
        content.appendChild(personCard);
    }

    let contentFooter = newButton("Create new person", "btn-success")
    contentFooter.addEventListener('click', () => createNewPersonForm())

    openNonClosableModal(content, contentFooter, "Select person");
}

async function createNewPersonForm(){
    closeModal();

    let person = {
        name: "",
        photoLink: ""
    }

    let content =  newPersonForm(sendPerson,person,"Create new person");

    let contentFooter = newButton("Go back", "btn-secondary");
    contentFooter.addEventListener('click', () => selectPersonForm())

    openNonClosableModalShort(content, contentFooter, "Create new person");
}

async function  sendPerson(person){
    let personName = document.getElementById("personName");
    let personPhotoLink = document.getElementById("personPhotoLink");

    if (typeof personName.value === 'string' && personName.value.length === 0) {
        personName.classList.add("is-invalid");
    } else if (typeof personPhotoLink.value === 'string' && personPhotoLink.value.length === 0){
        personPhotoLink.classList.add("is-invalid");
    } else{
        personName.classList.remove("is-invalid");
        personPhotoLink.classList.remove("is-invalid");

        person.name = personName.value;
        person.photoLink = personPhotoLink.value;

        let response = await postPerson(person);
        console.log(response);
        sessionStorage.setItem("currentUserId", response.id)
        window.location.href = "index.html";
        closeModal();
    }
}

function changeCurrentPerson(personJSON) {
sessionStorage.setItem('currentUserId', personJSON.id);
window.location.href = "index.html";
closeModal();
}

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

