function pixelArtPostCard(post){
    const id = post[0];
    const title = post[1];
    const pixelArtPostAsJson = post[2];
    const person = post[3];

    for(let pxl of pst.pixelArtAsJSON.grid){

        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener('click', () => buildPixelArtPostEditForm(pst));

        pixel.style.backgroundColor = pxl.color;

        pixelArt.appendChild(pixel);
    }
}