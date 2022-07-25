async function newSelectPersonForm(){
    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content");
    modalContent.classList.add("modal-dialog");
    modalContent.classList.add("modal-dialog-scrollable");

    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    let title = newTitle("Choose me");
    modalHeader.appendChild(title);

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    for(let person of await getAllPeople()){
        let personCard = newPickPersonCard(person);
        modalBody.appendChild(personCard);
    }

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);

    openNonClosableModal(modalContent);
}