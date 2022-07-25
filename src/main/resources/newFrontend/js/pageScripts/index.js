newSelectPersonForm();
makePixelArtPostCards();

function changeCurrentPerson(personJSON){
    let personContainer = document.getElementById("personSectionContainer");
    personContainer.replaceChildren();
    personContainer.appendChild(newCurrentPersonCard(personJSON));

    sessionStorage.setItem('currentUserId', personJSON.id);
    closeModal();
}

async function makePixelArtPostCards(){
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");
    for(let post of await getAllPosts()){
        let card = newPixelArtPostCard(post);
        pixelArtPostSection.appendChild(card);
    }
}