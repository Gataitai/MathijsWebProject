function newTitle(text){
    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.classList.add("mb-2");
    title.appendChild(document.createTextNode(text));
    return title
}