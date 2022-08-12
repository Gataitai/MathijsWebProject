function newSmallPersonImage(src, personId){
    let img = document.createElement("img");
    img.classList.add("smallPersonImage");
    img.src = src;
    img.addEventListener('click', () => window.location.href = hrefPerson(personId))
    return img;
}

function newMediumPersonImage(src, personId){
    let img = document.createElement("img");
    img.classList.add("mediumPersonImage");
    img.src = src;
    return img;
}

function newBigPersonImage(src, personId){
    let img = document.createElement("img");
    img.classList.add("personImage");
    img.src = src;
    img.addEventListener('click', () => window.location.href = hrefPerson(personId))
    return img;
}



