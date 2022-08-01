function newCommentInput() {
    let inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.id = "inputGroupComment";


    let inputIcon = document.createElement("i");
    inputIcon.classList.add("bi");
    inputIcon.classList.add("bi-chat");

    let inputGroupText = document.createElement("span");
    inputGroupText.classList.add("input-group-text");
    inputGroupText.appendChild(inputIcon);

    let input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control");
    input.id = "commentInput";
    input.placeholder = "Comment";

    let btn = newButton("Post comment");
    btn.addEventListener('click', () => sendComment());

    inputGroup.appendChild(inputGroupText);
    inputGroup.appendChild(input);
    inputGroup.appendChild(btn);
    inputGroup.appendChild(newCommentValidation("Can't send empty comment."));
    return inputGroup;
}

function newCommentValidation(text){
    let invalidTooltip = document.createElement("div");
    invalidTooltip.classList.add("invalid-tooltip");

    invalidTooltip.appendChild(document.createTextNode(text));

    return invalidTooltip;
}
