const URL_POSTS = 'http://localhost:8080/posts'

getAllPosts()

 async function getAllPosts() {
    const response = await fetch(URL_POSTS);
    const json = await response.json();

    //empty list before fetch
    document.getElementById("pixelArtPostsSection").replaceChildren();
    for(let pst of json){
        let pixelArtPosts = document.getElementById("pixelArtPostsSection");
        let pixelArtCard = document.createElement("div");
        pixelArtCard.classList.add("card");

        let pixelArt = document.createElement("div");
        pixelArt.classList.add("pixelArt");
        
        for(let pxl of pst.pixelArtAsJSON.grid){
    
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.addEventListener('click', () => buildPixelArtPostEditForm(pst));
            
            pixel.style.backgroundColor = pxl.color;
    
            pixelArt.appendChild(pixel);
        }
    
        let pixelArtContainer = document.createElement("div");
        pixelArtContainer.classList.add("pixelArtContainer");

        //personchip
        let personChip = document.createElement("div");
        personChip.classList.add("personChip");
        personChip.appendChild(document.createTextNode(pst.title));

        let personImg = document.createElement("img");
        let img = "pictures/" + pst.user.photoId + ".png"
        personImg.setAttribute("src", img);
        personChip.appendChild(personImg);

        let editBtn = document.createElement("span");
        editBtn.classList.add("commentButton");
        editBtn.addEventListener('click', () => buildPixelArtPostCommentSection(pst));

        let icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-comment");
        editBtn.appendChild(icon);
        personChip.appendChild(editBtn);
        pixelArtContainer.appendChild(personChip);
        
        pixelArtCard.appendChild(pixelArt); 
        pixelArtCard.appendChild(pixelArtContainer);
    
        pixelArtPosts.appendChild(pixelArtCard);
    }
}

function editPixel(id){
    let pixel = document.getElementById(id);
    let value = document.getElementById("colorPicker").value; 
    pixel.style.backgroundColor = value;
    pixel.value = value
}

function putPixelArtPost(pst){
    for (let i = 0; i < 256; i++) {
        let color = document.getElementById(i).value;
        pst.pixelArtAsJSON.grid[i].color = color;
        pst.pixelArtAsJSON.grid[i].id = i;
    }
    closeModal();

    const updatedPixelArtPost = {
        id: pst.id,
        title: pst.title,
        pixelArtAsJSON: pst.pixelArtAsJSON,
        person: pst.user,
        comments: pst.comments
    };

    fetch(URL_POSTS,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPixelArtPost)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success', result);
        getAllPosts()
    })
    .catch(error => {
        console.error('Error', error);
    })
}

function buildPixelArtPostEditForm(pst){

    let pixelArtContainer  = document.createElement("div");
    pixelArtContainer .classList.add("pixelArtContainer");

    let pixelArtCard = document.createElement("div");
    pixelArtCard.classList.add("card");
    let view = document.createElement("div");
    view.classList.add("view");
    view.appendChild(pixelArtCard);

    let colorPicker = document.createElement("div");
    colorPicker.classList.add("colorPicker")
    let input = document.createElement("input");
    input.setAttribute("type", "color");
    input.setAttribute("id", "colorPicker")
    input.setAttribute("value", "#F58A8A")
    colorPicker.appendChild(input);

    let pixelArt = document.createElement("div");
    pixelArt.classList.add("pixelArt");
    for(let pxl of pst.pixelArtAsJSON.grid){
        let pixel = document.createElement("div");

        pixel.classList.add("pixel");
        
        pixel.value = pxl.color;
        pixel.style.backgroundColor = pxl.color;

        pixel.setAttribute("id", pxl.id);

        pixel.addEventListener('click', () => editPixel(pxl.id))

        pixelArt.appendChild(pixel);
    }
    pixelArtCard.appendChild(pixelArt);

    let submitBtn = document.createElement("button");
    submitBtn.appendChild(document.createTextNode("Edit PixelArt"))
    submitBtn.addEventListener('click', () => putPixelArtPost(pst))
    colorPicker.appendChild(submitBtn);

    pixelArtContainer .appendChild(view);
    pixelArtContainer .appendChild(colorPicker)

    openModal(pixelArtContainer);
}

function buildPixelArtPostCommentSection(pst){
    let pixelArtContainer  = document.createElement("div");
    pixelArtContainer .classList.add("pixelArtContainer");

    let pixelArtCard = document.createElement("div");
    pixelArtCard.classList.add("card");
    let view = document.createElement("div");
    view.classList.add("view");

    let pixelArt = document.createElement("div");
    pixelArt.classList.add("pixelArt");
    for(let pxl of pst.pixelArtAsJSON.grid){
        let pixel = document.createElement("div");

        pixel.classList.add("pixel");
        
        pixel.value = pxl.color;
        pixel.style.backgroundColor = pxl.color;

        pixel.setAttribute("id", pxl.id);

        pixel.addEventListener('click', () => editPixel(pxl.id))

        pixelArt.appendChild(pixel);
    }
    pixelArtCard.appendChild(pixelArt);

    let commentSection = document.createElement("div");
    commentSection.classList.add("commentSection");

    view.appendChild(pixelArtCard);
    pixelArtContainer.appendChild(view);
    pixelArtContainer.appendChild(commentSection);

    openModal(pixelArtContainer);
}

function postNewPixelArt(){
    
}

 