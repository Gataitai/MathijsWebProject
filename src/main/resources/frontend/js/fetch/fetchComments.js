const URL_COMMENTS = 'http://localhost:8080/comments';

async function getCommentById(id) {
    const response = await fetch(URL_COMMENTS + "/" + id);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving comment by id");
    }
}

async function getCommentsFromPostById(id) {
    const response = await fetch(URL_COMMENTS + "/post/" + id);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving comment by post id");
    }
}

async function postComment(comment, pixelArtPostId, personId){
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    }
    const response = await fetch(URL_COMMENTS + "/post/" + pixelArtPostId + "/person/" + personId, config);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with posting comment");
    }
}

async function putComment(comment, id){
    const config = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    }
    const response = await fetch(URL_COMMENTS + "/" + id, config);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with updating comment");
    }
}

async function deleteComment(id){
    const config = {
        method: 'DELETE'
    }
    const response = await fetch(URL_COMMENTS + "/" + id, config);
    if (response.ok) {
        console.log(response)
    } else {
        console.log("Something went wrong with deleting comment");
    }
}


