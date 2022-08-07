function newButton(text) {
    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.appendChild(document.createTextNode(text));
    return btn;
}

function newRedButton(text) {
    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-danger");
    btn.appendChild(document.createTextNode(text));
    return btn;
}

function newYellowButton(text) {
    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-warning");
    btn.appendChild(document.createTextNode(text));
    return btn;
}

function newOptionsButton() {
    let icon = document.createElement("i");
    icon.classList.add("bi");
    icon.classList.add("bi-three-dots");
    icon.style.cursor = "pointer";
    return icon;
}

function newOptionButtons(updateAction, deleteAction, id){
    let content = document.createElement("div");

    let editBtn = newYellowButton("Edit");
    editBtn.classList.add("col-12");
    editBtn.classList.add("mb-2");
    editBtn.addEventListener('click', () => updateAction(id));

    let deleteBtn = newRedButton("Delete"); 
    deleteBtn.classList.add("col-12");
    deleteBtn.addEventListener('click', () => deleteAction(id));

    content.appendChild(editBtn);
    content.appendChild(deleteBtn);

    return content;
}