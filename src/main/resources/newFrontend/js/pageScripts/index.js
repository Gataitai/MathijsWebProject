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
    let content = document.createElement("div");

    for (let person of await getAllPeople()) {
        let personCard = newPickPersonCard(person);
        content.appendChild(personCard);
    }

    openNonClosableModal(content, "Select new person");
}
