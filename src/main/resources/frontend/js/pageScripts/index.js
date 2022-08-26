personIsChosenCheck();
makePixelArtPostCards();

async function makePixelArtPostCards() {
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");
    pixelArtPostSection.replaceChildren();
    for (let post of await getAllPosts()) {
        let card = newPixelArtPostCard(post);
        pixelArtPostSection.appendChild(card);
    }
}

async function personIsChosenCheck(){
    let id = sessionStorage.getItem("currentPersonId");
    if (id === null) {
        window.location.href = "login.html";
        console.log("not chosen");
    }
    else{
        console.log("chosen " + id);
        let person = await getPersonById(id);
        let personContainer = document.getElementById("personSectionContainer");
        personContainer.replaceChildren();
        personContainer.appendChild(newCurrentPersonCard(person));
    }
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
        let personId = sessionStorage.getItem("currentPersonId");

        let response = await postPost(pst, personId);
        window.location.href = hrefPost(response.id);
        closeModal();
    }
}


