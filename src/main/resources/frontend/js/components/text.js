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
    text.appendChild(document.createTextNode(new Date(date).toLocaleString(Location)));
    return text;
}

function newComment(cmt){

    function newCommentArea(node){
        let area = document.createElement("div");
        area.classList.add("commentArea");
        area.appendChild(node);
        return area;
    }

    let comment = document.createElement("div");
    comment.classList.add("comment");
    comment.classList.add("mb-2");

    comment.appendChild(newCommentArea(newSmallPersonImage(cmt.person.photoLink, cmt.person.id)));
    comment.appendChild(newCommentArea(document.createTextNode(cmt.person.name + ": " + cmt.text)));

    let icon = newOptionsButton();
    icon.addEventListener('click', () => commentOptionsForm(cmt.id));
    
    comment.appendChild(newCommentArea(newDate(cmt.commentDate)));
    comment.appendChild(newCommentArea(icon));

    return comment;
}