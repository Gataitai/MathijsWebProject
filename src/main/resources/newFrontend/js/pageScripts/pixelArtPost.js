makePixelArtPostCommentSectionCard();

function scrollDown(){
    let commentSection= document.getElementById("commentSection");
    commentSection.scrollTo(0, commentSection.scrollHeight);
}

async function makePixelArtPostCommentSectionCard() {
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");

    let id = sessionStorage.getItem('currentPixelArtPost');

    let post = await getPostById(id);
    let comments = await getCommentsFromPostById(id);

    let card = newPixelArtPostCommentSectionCard(post, comments);

    pixelArtPostSection.appendChild(card);
    scrollDown()
}

function commentForm(id){
    let content = document.createElement("div");

    let editBtn = newYellowButton("Edit comment");
    editBtn.classList.add("col-12");
    editBtn.classList.add("mb-2");
    editBtn.addEventListener('click', () => changeComment(id));

    let deleteBtn = newRedButton("Delete comment");
    deleteBtn.classList.add("col-12");
    deleteBtn.addEventListener('click', () => deleteComment(id));

    content.appendChild(editBtn);
    content.appendChild(deleteBtn);

    openModal(content, "Comment options");
}

function changeComment(id){
    closeModal();
    console.log("changing " + id);
}

function deleteComment(id){
    closeModal();
    console.log("deleting " + id);
}

async function sendComment(){
    let input = document.getElementById("commentInput");

    if (typeof input.value === 'string' && input.value.length === 0) {
        input.classList.add("is-invalid");
    } else {
        let commentSection= document.getElementById("commentSection");
        input.classList.remove("is-invalid");

        let postId = sessionStorage.getItem('currentPixelArtPost');
        let userId = sessionStorage.getItem("currentUserId");
    
        let comment = {
            text : input.value
        };
    
        let response = await postComment(comment, postId, userId);
        commentSection.appendChild(newComment(response));
    
        scrollDown();
    
        input.value = '';
    }
}