function newPostForm(action, pst, btnText){

    let content = document.createElement("div");
    content.classList.add("d-grid");
    content.classList.add("gap-3");

    let titleInput = newInput("pixelArtPostTitle", pst.title, "Title", "bi-type");

    let pixelArt = document.createElement("div");
    pixelArt.classList.add("pixelArt");
    for(let pxl of pst.pixelArtAsJSON.grid){
        let pixel = document.createElement("div");

        pixel.classList.add("pixel");
        
        pixel.value = pxl.color;
        pixel.style.backgroundColor = pxl.color;

        pixel.id = "pixel"+pxl.id;

        pixel.addEventListener('click', () => editPixel(pxl.id))

        pixelArt.appendChild(pixel);
    }

    let colorPicker = document.createElement("input");
    colorPicker.classList.add("form-control");
    colorPicker.classList.add("form-color-control");
    colorPicker.classList.add("p-0");
    colorPicker.setAttribute("type", "color");
    colorPicker.setAttribute("id", "colorPicker");
    colorPicker.setAttribute("value", "#F58A8A");

    let submitBtn = newButton(btnText, "btn-success");
    submitBtn.addEventListener('click', () => action(pst))

    content.appendChild(titleInput);
    content.appendChild(pixelArt);
    content.appendChild(colorPicker);
    content.appendChild(submitBtn);

    return content;
}

function newPersonForm(action, person, btnText){
    let content = document.createElement("div");
    content.classList.add("d-grid");
    content.classList.add("gap-3");

    let name = newInput("personName", person.name, "Name", "bi-person");
    let photo = newInput("personPhotoLink", person.photoLink, "Link to photo", "bi-image");

    let submitBtn = newButton(btnText, "btn-success");
    submitBtn.addEventListener('click', () => action(person));

    content.appendChild(name);
    content.appendChild(photo);
    content.appendChild(submitBtn);

    return content;
}