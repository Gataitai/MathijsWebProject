newSelectPersonForm();
makePixelArtPostCards();


function changeCurrentPerson(personJSON) {
    let personContainer = document.getElementById("personSectionContainer");
    personContainer.replaceChildren();
    personContainer.appendChild(newCurrentPersonCard(personJSON));

    sessionStorage.setItem('currentUserId', personJSON.id);
    closeModal();
}

function changeCurrentPixelArtPost(id) {
    sessionStorage.setItem('currentPixelArtPost', id);
}

function setEmptyPersonCard(){
    let personContainer = document.getElementById("personSectionContainer");
    personContainer.replaceChildren();
    personContainer.appendChild(newEmptyPersonCard());
}

async function makePixelArtPostCards() {
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");
    pixelArtPostSection.replaceChildren();
    for (let post of await getAllPosts()) {
        let card = newPixelArtPostCard(post);
        pixelArtPostSection.appendChild(card);
    }
}

async function newSelectPersonForm() {
    setEmptyPersonCard();
    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content");
    modalContent.classList.add("modal-dialog");
    modalContent.classList.add("modal-dialog-scrollable");

    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    let title = newTitle("Choose a person");
    modalHeader.appendChild(title);

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    for (let person of await getAllPeople()) {
        let personCard = newPickPersonCard(person);
        modalBody.appendChild(personCard);
    }

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);

    openNonClosableModal(modalContent);
}
