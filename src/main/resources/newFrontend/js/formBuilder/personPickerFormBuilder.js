async function pickPersonForm(){
    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content");
    modalContent.classList.add("modal-dialog");
    modalContent.classList.add("modal-dialog-scrollable");

    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    let modalTitle = document.createElement("h5");
    modalContent.classList.add("modal-title");
    modalTitle.appendChild(document.createTextNode("Choose person"));
    modalHeader.appendChild(modalTitle);

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    for(let person of await getAllPeople()){
        let personCard = pickPersonCard(person);
        modalBody.appendChild(personCard);
    }

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);

    openModal(modalContent);
}