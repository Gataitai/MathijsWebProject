function newSmallPersonImage(src){
    let img = document.createElement("img");
    img.classList.add("smallPersonImage");
    img.src = src;
    return img;
}