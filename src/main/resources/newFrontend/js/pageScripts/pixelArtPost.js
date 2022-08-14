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

function commentOptionsForm(id){

    let content = newOptionButtons(updateCommentForm, removeComment, id);

    openModal(content, "Comment options");
}

async function updateCommentForm(id){
    closeModal();
    sessionStorage.setItem("currentUpdatingComment", id);

    let comment = await getCommentById(id);

    let content = newCommentInput(updateComment, comment,"Edit comment", "updateCommentInput");
    openModal(content, "Edit comment")
}

async function updateComment(cmt){
    let input = document.getElementById("updateCommentInput");
    
    if (typeof input.value === 'string' && input.value.length === 0) {
        input.classList.add("is-invalid");
    } else {
        input.classList.remove("is-invalid");

        let commentObject = {
            text : input.value
        };
    
        let response = await putComment(commentObject, cmt.id);
    
        let comment = document.getElementById("comment" + cmt.id);
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
        let userId = sessionStorage.getItem("currentPersonId");
    
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

function pixelArtPostOptionsForm(id){
    let content = newOptionButtons(updatePixelArtPostForm, deletePixelArtPostForm, id)
    openModal(content, "Pixelart options")
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