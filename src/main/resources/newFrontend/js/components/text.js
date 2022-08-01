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

function newComment(cmt){
    let comment = document.createElement("div");
    comment.classList.add("mb-2");
    
    let img = document.createElement("img");
    img.classList.add("smallPersonImage");
    img.src = cmt.person.photoLink;

    comment.appendChild(img);
    comment.appendChild(document.createTextNode(cmt.person.name + ": " + cmt.text));

    let date = newDate(cmt.commentDate);

    comment.appendChild(date);
    return comment;
}