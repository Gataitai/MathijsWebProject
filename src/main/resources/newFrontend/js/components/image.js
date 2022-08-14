function newSmallPersonImage(src, personId){
    let img = document.createElement("img");
    img.classList.add("smallPersonImage");
    img.src = src;
    img.addEventListener('click', () => window.location.href = hrefPerson(personId))
    return img;
}

function newMediumPersonImage(src){
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

function newNavIconImage(person){
    let img = document.createElement("img");
    img.classList.add("smallPersonImage");
    img.src = person.photoLink;
    img.addEventListener('click', () => accountOptionsForm(person.id));
    return img;
}



