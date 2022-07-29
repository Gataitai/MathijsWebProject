function newbutton(text) {
    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.appendChild(document.createTextNode(text));
    return btn;
}