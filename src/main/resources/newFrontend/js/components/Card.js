function pixelArtPostCard(post){
    const id = post[0];
    const title = post[1];
    const pixelArtPostAsJson = post[2];
    const person = post[3];

    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let pixelArt = pixelArt(pixelArtPostAsJson);

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    let btn = document.createElement("a");
    btn.classList.add("btn btn-primary");

    cardBody.appendChild(pixelArt);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(btn);

    card.appendChild(cardBody);

    return card;
}

function pixelArt(pixelArtPostAsJson){
    let pixelArt = document.createElement("div");
    pixelArt.classList.add("pixelArt");

    for(let pxl of pixelArtPostAsJson.grid){

        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.backgroundColor = pxl.color;

        pixelArt.appendChild(pixel);
    }

    return pixelArt;
}