function newTitle(text) {
    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.classList.add("mb-2");
    title.appendChild(document.createTextNode(text));
    return title
}

function newDate(date){
    let text = document.createElement("p");
    text.classList.add("text-muted");
    text.appendChild(document.createTextNode(new Date(date).toLocaleDateString(Location)));
    return text;
}