personIsChosenCheck();
makePixelArtPostCards();

async function makePixelArtPostCards() {
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");
    pixelArtPostSection.replaceChildren();
    for (let post of await getAllPosts()) {
        let card = newPixelArtPostCard(post);
        pixelArtPostSection.appendChild(card);
    }
}

async function personIsChosenCheck(){
    let id = sessionStorage.getItem("currentUserId");
    if (id === null) {
        window.location.href = "login.html";
        console.log("not chosen");
    }
    else{
        console.log("chosen " + id);
        let person = await getPersonById(id);
        let personContainer = document.getElementById("personSectionContainer");
        personContainer.replaceChildren();
        personContainer.appendChild(newCurrentPersonCard(person));
    }
}
