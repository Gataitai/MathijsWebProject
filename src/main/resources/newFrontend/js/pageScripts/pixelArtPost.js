makePixelArtPostCards();

async function makePixelArtPostCards() {
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");

    let id = sessionStorage.getItem('currentPixelArtPost');

    let post = await getPostById(id);

    let card = newPixelArtPostCard(post);

    pixelArtPostSection.appendChild(card);
}