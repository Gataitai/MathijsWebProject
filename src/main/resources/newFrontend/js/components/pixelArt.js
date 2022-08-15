function newPixelArt(grid){
    let pixelArt = document.createElement("div");
    pixelArt.classList.add("pixelArt");

    for (let pxl of grid) {

        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.backgroundColor = pxl.color;

        pixelArt.appendChild(pixel);
    }

    return pixelArt;
}

function newMediumPixelArt(grid){
    let pixelArt = newPixelArt(grid);
    pixelArt.style.height = "7rem";
    pixelArt.style.width = "7rem";
    return pixelArt;
}