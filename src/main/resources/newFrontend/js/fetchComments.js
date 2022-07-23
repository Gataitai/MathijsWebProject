const URL_POSTS = 'http://localhost:8080/posts'

getAllPosts();

async function getAllPosts(){
    const response = await fetch(URL_POSTS);
    const json = await response.json();

    let pixelArtPostSection = document.getElementById("pixelArtPostSection");
    for(let post of json){
        let card = pixelArtPostCard(post);
        pixelArtPostSection.appendChild(card);
    }
}

function pixelArtPostCard(post){

    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let pixelArt = document.createElement("div");
    pixelArt.classList.add("pixelArt");

    for(let pxl of post.pixelArtAsJSON.grid){

        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.backgroundColor = pxl.color;

        pixelArt.appendChild(pixel);
    }

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-primary");

    cardBody.appendChild(pixelArt);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(btn);

    card.appendChild(cardBody);

    return card;
}

