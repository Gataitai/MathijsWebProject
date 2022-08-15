setPersonIcon();

async function personSearch(){
    document.getElementById("pixelArtSearch").value = "";
    document.getElementById("pixelArtByPersonSearch").value = "";
    let personInput = document.getElementById("personSearch");

    let content = document.getElementById("searchModal");
    content.replaceChildren();

    if(personInput.value === ""){
        return;
    }

    for (let person of await getPeopleByName(personInput.value)) {
        let img = newMediumPersonImage(person.photoLink);

        let personCard = newSearchCard(img, newTitle(person.name), "Go to profile", hrefPerson, person.id);
        content.appendChild(personCard);
    }
}

async function pixelArtByPersonSearch(){
    document.getElementById("personSearch").value = "";
    document.getElementById("pixelArtSearch").value = "";
    let pixelArtByPersonInput = document.getElementById("pixelArtByPersonSearch");

    let content = document.getElementById("searchModal");
    content.replaceChildren();

    if(pixelArtByPersonInput.value === ""){
        return;
    }

    for(let post of await getAllPostsByPersonName(pixelArtByPersonInput.value)){
        let pixelArt = newMediumPixelArt(post.pixelArtAsJSON.grid);

        let title = newTitle(post.title);
        let img = newSmallPersonImage(post.person.photoLink, post.person.id);
        img.classList.add("me-2");
        title.insertBefore(img, title.firstChild);

        let pixelArtPostCard = newSearchCard(pixelArt, title, "Go to post", hrefPost, post.id);
        content.appendChild(pixelArtPostCard);
    }
}

async function pixelArtSearch(){
    document.getElementById("personSearch").value = "";
    document.getElementById("pixelArtByPersonSearch").value = "";
    let pixelArtInput = document.getElementById("pixelArtSearch");

    let content = document.getElementById("searchModal");
    content.replaceChildren();

    if(pixelArtInput.value === ""){
        return;
    }

    for (let post of await getAllPostsByTitle(pixelArtInput.value)) {
        console.log(post);
        let pixelArt = newMediumPixelArt(post.pixelArtAsJSON.grid);

        let title = newTitle(post.title);
        let img = newSmallPersonImage(post.person.photoLink, post.person.id);
        img.classList.add("me-2");
        title.insertBefore(img, title.firstChild);

        let pixelArtPostCard = newSearchCard(pixelArt, title, "Go to post", hrefPost, post.id);
        content.appendChild(pixelArtPostCard);
    }
}

function logOut(){
    sessionStorage.removeItem("currentPersonId");
    window.location.href = "login.html"
}

async function setPersonIcon(){
    let personId = sessionStorage.getItem("currentPersonId");

    let person = await getPersonById(personId);

    let personIcon = document.getElementById("personIcon");

    personIcon.appendChild(newNavIconImage(person));
}

function searchForm(){
    let contentHeader = document.createElement("div");
    contentHeader.classList.add("d-grid");
    contentHeader.classList.add("gap-3");

    let personInput = newInput("personSearch","","Person by name", "bi-at");
    personInput.oninput = personSearch;
    personInput.querySelector("input").autocomplete = "off";

    let pixelArtByPersonInput = newInput("pixelArtByPersonSearch","","Pixelart by person", "bi-person");
    pixelArtByPersonInput.oninput = pixelArtByPersonSearch;
    pixelArtByPersonInput.querySelector("input").autocomplete = "off";

    let pixelArtInput = newInput("pixelArtSearch","","Pixelart by title", "bi-image");
    pixelArtInput.oninput = pixelArtSearch;
    pixelArtInput.querySelector("input").autocomplete = "off";

    contentHeader.appendChild(personInput);
    contentHeader.appendChild(pixelArtByPersonInput);
    contentHeader.appendChild(pixelArtInput);

    let content = document.createElement("div");
    // let pixelArt = document.createElement("div");
    // pixelArt.style.height = "7rem";
    // pixelArt.style.width = "7rem";
    // pixelArt.classList.add("pixelArt");
    //
    // for (let pxl of post.pixelArtAsJSON.grid) {
    //
    //   let pixel = document.createElement("div");
    //   pixel.classList.add("pixel");
    //   pixel.style.backgroundColor = pxl.color;
    //
    //   pixelArt.appendChild(pixel);
    // }

    // for (let person of await getAllPosts()) {
    //     let personCard = newSearchCard(person);
    //     content.appendChild(personCard);
    // }

    openSearchModal(content,contentHeader);
}

function accountOptionsForm(id){
    let content = document.createElement("div");
    content.classList.add("d-grid");
    content.classList.add("gap-3");

    let profileButton = newButton("My profile", "btn-primary");
    profileButton.addEventListener('click', () => window.location.href = hrefPerson(id))

    let personOptionsButton = new newButton("Person options", "btn-warning");
    personOptionsButton.addEventListener('click', () => personOptionsForm(id));

    let logOutButton = new newButton("Log out", "btn-danger");
    logOutButton.addEventListener('click', () => logOut())

    content.appendChild(profileButton);
    content.appendChild(personOptionsButton);
    content.appendChild(logOutButton);

    openModal(content, "Account options");
}



function personOptionsForm(id){
    closeModal();

    let content = newOptionButtons(updatePersonForm, deletePersonForm, id);

    openModal(content, "Person options");
}

async function updatePersonForm(id){
    closeModal();
    let person = await getPersonById(id);

    let content = newPersonForm(updatePerson,person,"Update person");
    openModal(content, "Edit person")
}


function deletePersonForm(id){
    closeModal();

    let content = document.createElement("div");
    content.style.display = "grid";

    let deleteButton = newButton("Click here to delete account", "btn-danger")
    deleteButton.addEventListener('click', () => deleteAccount(id));
    content.appendChild(deleteButton);

    openModal(content, "Delete account")
}

async function updatePerson(person){
    let personName = document.getElementById("personName");
    let personPhotoLink = document.getElementById("personPhotoLink");

    if (typeof personName.value === 'string' && personName.value.length === 0) {
        personName.classList.add("is-invalid");
    } else if (typeof personPhotoLink.value === 'string' && personPhotoLink.value.length === 0){
        personPhotoLink.classList.add("is-invalid");
    } else{
        personName.classList.remove("is-invalid");
        personPhotoLink.classList.remove("is-invalid");

        person.name = personName.value;
        person.photoLink = personPhotoLink.value;

        let response = await putPerson(person, person.id);
        console.log(response);
        window.location.href = "index.html";
        closeModal();
    }
}

async function deleteAccount(id){
    deletePerson(id);
    sessionStorage.removeItem("currentPersonId")
    window.location.href = "login.html";
    closeModal();
}

function editPixel(id){
    let pixel = document.getElementById("pixel"+id);
    let value = document.getElementById("colorPicker").value;
    pixel.style.backgroundColor = value;
    pixel.value = value
}