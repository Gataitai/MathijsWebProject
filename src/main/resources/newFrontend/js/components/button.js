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