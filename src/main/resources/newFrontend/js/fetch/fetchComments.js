const URL_COMMENTS = 'http://localhost:8080/comments'

async function getCommentsFromPostById(id) {
    const response = await fetch(URL_COMMENTS + "/post/" + id);
    const json = await response.json();
    return json;
}

async function postComment(text, pixelArtPostId, personId){
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(text)
    }
    const response = await fetch(URL_COMMENTS + "/post/" + pixelArtPostId + "/person/" + personId, config);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        //
    }
}


