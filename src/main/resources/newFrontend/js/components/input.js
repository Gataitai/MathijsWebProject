function newInput(inputId, inputValue,intputPlaceHolder, inputIcon){
    let group = document.createElement("div");
    group.classList.add("input-group");

    let icon = document.createElement("i");
    icon.classList.add("bi");
    icon.classList.add(inputIcon);

    let text = document.createElement("span");
    text.classList.add("input-group-text");
    text.appendChild(icon);

    let input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control");
    input.id = inputId;
    input.placeholder = intputPlaceHolder;
    input.value = inputValue;
    
    group.appendChild(text);
    group.appendChild(input);

    return group;
}

function newCommentInput(action, btnText, inputId) {
    let inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    let inputIcon = document.createElement("i");
    inputIcon.classList.add("bi");
    inputIcon.classList.add("bi-chat");

    let inputGroupText = document.createElement("span");
    inputGroupText.classList.add("input-group-text");
    inputGroupText.appendChild(inputIcon);

    let input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control");
    input.id = inputId;
    input.placeholder = "Comment";

    let btn = newButton(btnText, "btn-primary");
    btn.addEventListener('click', () => action());

    inputGroup.appendChild(inputGroupText);
    inputGroup.appendChild(input);
    inputGroup.appendChild(btn);
    // inputGroup.appendChild(newCommentValidation("Can't send empty comment."));
    return inputGroup;
}

function newCommentValidation(text){
    let invalidTooltip = document.createElement("div");
    invalidTooltip.classList.add("invalid-tooltip");

    invalidTooltip.appendChild(document.createTextNode(text));

    return invalidTooltip;
}
