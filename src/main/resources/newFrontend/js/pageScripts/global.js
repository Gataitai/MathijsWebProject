function logOut(){
    sessionStorage.removeItem("currentUserId");
    window.location.href = "login.html"
}

function pixelArtPostOptionsForm(id){
    let content = newOptionButtons(updatePixelArtPostForm, deletePixelArtPostForm, id)
    openModal(content, "Pixelart options")
}

function PixelArtPostForm(){
    let grid = {
        grid: []
    };

    for (let i = 0; i < 256; i++){
        let color = {
            id: i,
            color: "#cfcfcf"
        }

        if(i % 2 === 0) {
            color.color = "#e8e8e8";
        }

        grid.grid.push(color);
    }

    const post = {
        title: "",
        pixelArtAsJSON: grid,
    }
    openModal(newPostForm(sendPixelArtPost,post,"Create new post"), "New post")
}

async function updatePixelArtPostForm(id){
    closeModal();
    let pixelartPost = await getPostById(id);

    let content = newPostForm(updatePixelArtPost,pixelartPost,"Update post");
    openModal(content, "Edit post")
}

function deletePixelArtPostForm(id){
    closeModal();

    let content = document.createElement("div");
    content.style.display = "grid";

    let deleteButton = newButton("Click here to delete", "btn-danger")
    deleteButton.addEventListener('click', () => deletePixelArtPost(id));
    content.appendChild(deleteButton);

    openModal(content, "Delete pixelart")
}

async function  sendPixelArtPost(pst){
    let input = document.getElementById("pixelArtPostTitle");

    if (typeof input.value === 'string' && input.value.length === 0) {
        input.classList.add("is-invalid");
    } else {
        input.classList.remove("is-invalid");

        pst.title = input.value;
        for (let i = 0; i < 256; i++) {
            let color = document.getElementById("pixel"+i).value;
            pst.pixelArtAsJSON.grid[i].color = color;
            pst.pixelArtAsJSON.grid[i].id = i;
        }
        let personId = sessionStorage.getItem("currentUserId");

        let response = await postPost(pst, personId);
        window.location.href = hrefPost(response.id);
        closeModal();
    }
}

function editPixel(id){
    let pixel = document.getElementById("pixel"+id);
    let value = document.getElementById("colorPicker").value;
    pixel.style.backgroundColor = value;
    pixel.value = value
}

async function updatePixelArtPost(pst){
    let input = document.getElementById("pixelArtPostTitle");

    if (typeof input.value === 'string' && input.value.length === 0) {
        input.classList.add("is-invalid");
    } else {
        input.classList.remove("is-invalid");

        pst.title = input.value;
        for (let i = 0; i < 256; i++) {
            let color = document.getElementById("pixel"+i).value;
            pst.pixelArtAsJSON.grid[i].color = color;
            pst.pixelArtAsJSON.grid[i].id = i;
        }

        let response = await putPost(pst, pst.id);
        let pixelArt = document.getElementById("pixelArt");
        pixelArt.replaceChildren();
        for(let pxl of response.pixelArtAsJSON.grid){
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.backgroundColor = pxl.color;
            pixelArt.appendChild(pixel);
        }
        closeModal();
    }
}

async function deletePixelArtPost(id){
    deletePost(id);
    window.location.href = "index.html";
    closeModal();
}