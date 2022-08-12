makePixelArtPostCardsFromPerson();
setPersonCard();

function getPersonIdFromUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("person");
}

async function setPersonCard() {
    let id = getPersonIdFromUrl()
    let person = await getPersonById(id);
    let personContainer = document.getElementById("personSectionContainer");
    personContainer.appendChild(newPersonInfoCard(person));
}

async function makePixelArtPostCardsFromPerson() {
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");
    let id = getPersonIdFromUrl();

    let pixelArtPostsFromPerson = await getAllPostsByPersonId(id);

    for (let post of pixelArtPostsFromPerson) {
        let card = newPixelArtPostCard(post);
        pixelArtPostSection.appendChild(card);
    }
}
