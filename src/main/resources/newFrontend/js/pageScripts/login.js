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

    let content = document.createTextNode("test");

    let contentFooter = newButton("Go back", "btn-secondary");
    contentFooter.addEventListener('click', () => selectPersonForm())

    openNonClosableModal(content, contentFooter, "Create new person");
}

function changeCurrentPerson(personJSON) {
sessionStorage.setItem('currentUserId', personJSON.id);
window.location.href = "index.html";
closeModal();
}

