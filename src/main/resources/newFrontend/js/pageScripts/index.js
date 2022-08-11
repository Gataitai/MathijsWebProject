personIsChosenCheck();
makePixelArtPostCards();

function changeCurrentPerson(personJSON) {
    let personContainer = document.getElementById("personSectionContainer");
    personContainer.replaceChildren();
    personContainer.appendChild(newCurrentPersonCard(personJSON));

    sessionStorage.setItem('currentUserId', personJSON.id);
    closeModal();
}

function newPixelArtPostForm(){
    let grid = {
        grid: []
    };

    for (let i = 0; i < 256; i++){
        let color = {
            id: i,
            color: "#cfcfcf"
        }

        if(i % 2 === 0) {
            color.color = "#e8e8e8";
        }

        grid.grid.push(color);
    }

    const post = {
        title: "",
        pixelArtAsJSON: grid,
    }
    openModal(newPostForm(makePixelArtPost,post,"Create new post"), "New post")
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

async function personIsChosenCheck(){
    let id = sessionStorage.getItem("currentUserId");
    if (id === null) {
        newSelectPersonForm();
        console.log("not chosen");
    }
    else{
        console.log("chosen " + id);
        let person = await getPersonById(id);
        changeCurrentPerson(person);
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
