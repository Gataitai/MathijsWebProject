makePixelArtPostCard();

async function makePixelArtPostCard() {
    let pixelArtPostSection = document.getElementById("pixelArtPostSection");

    let id = sessionStorage.getItem('currentPixelArtPost');

    let post = await getPostById(id);
    let comments = await getCommentsFromPostById(id);

    let card = newPixelArtPostCommentSectionCard(post, comments);

    pixelArtPostSection.appendChild(card);
}

async function sendComment(){
    let input = document.getElementById("commentInput");

    let postId = sessionStorage.getItem('currentPixelArtPost');
    let userId = sessionStorage.getItem("currentUserId");

    let comment = {
        text : "test"
    };

    let response = await postComment(comment, postId, userId);
    console.log(response);
}