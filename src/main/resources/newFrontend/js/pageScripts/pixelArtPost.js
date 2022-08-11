makePixelArtPostCommentSectionCard();

function scrollDown(){
    let commentSection= document.getElementById("commentSection");
    commentSection.scrollTo(0, commentSection.scrollHeight);
}

async function makePixelArtPostCommentSectionCard() {
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("post")

    let post = await getPostById(id);
    let comments = await getCommentsFromPostById(id);

    let card = newPixelArtPostCommentSectionCard(post, comments);

    pixelArtPostSection.appendChild(card);
    scrollDown()
}

function pixelArtPostForm(id){
    let content = newOptionButtons(updatePixelArtPostForm, deletePixelArtPostForm, id)
    openModal(content, "Pixelart options")
}

function commentForm(id){

    let content = newOptionButtons(updateCommentForm, removeComment, id);

    openModal(content, "Comment options");
}

async function updatePixelArtPostForm(id){
    closeModal();
    let pixelartPost = await getPostById(id);

    let content = newPostForm(updatePixlArtPost,pixelartPost,"Update post");
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

function updateCommentForm(id){
    closeModal();
    sessionStorage.setItem("currentUpdatingComment", id);
    let content = newCommentInput(updateComment, "Edit comment", "updateCommentInput");
    openModal(content, "Edit comment")
}

function editPixel(id){
    let pixel = document.getElementById("pixel"+id);
    let value = document.getElementById("colorPicker").value; 
    pixel.style.backgroundColor = value;
    pixel.value = value
}

async function  makePixelArtPost(pst){
    pst.title = document.getElementById("pixelArtPostTitle").value;
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

async function updatePixlArtPost(pst){
    pst.title = document.getElementById("pixelArtPostTitle").value;
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

async function deletePixelArtPost(id){
    deletePost(id);
    window.location.href = "index.html";
    closeModal();
}

async function updateComment(){
    let id = sessionStorage.getItem("currentUpdatingComment");
    let input = document.getElementById("updateCommentInput");
    
    if (typeof input.value === 'string' && input.value.length === 0) {
        input.classList.add("is-invalid");
    } else {
        input.classList.remove("is-invalid");

        let commentObject = {
            text : input.value
        };
    
        let response = await putComment(commentObject, id);
    
        let comment = document.getElementById("comment" + id);
        comment.replaceChildren();
        comment.appendChild(newComment(response));
    
        closeModal();
    }
}

async function removeComment(id){
    deleteComment(id);
    let comment = document.getElementById("comment" + id);
    comment.replaceChildren();
    closeModal();
}

async function sendComment(){
    let input = document.getElementById("postCommentInput");

    if (typeof input.value === 'string' && input.value.length === 0) {
        input.classList.add("is-invalid");
    } else {
        let commentSection= document.getElementById("commentSection");
        input.classList.remove("is-invalid");

        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("post");
        let userId = sessionStorage.getItem("currentUserId");
    
        let commentObject = {
            text : input.value
        };
    
        let response = await postComment(commentObject, postId, userId);

        let comment = document.createElement("div");
        comment.id = "comment" + response.id;
        comment.appendChild(newComment(response));
        commentSection.appendChild(comment);
    
        scrollDown();
    
        input.value = '';
    }
}