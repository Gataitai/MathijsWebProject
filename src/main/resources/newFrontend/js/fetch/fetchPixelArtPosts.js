const URL_POSTS = 'http://localhost:8080/posts';

async function getAllPosts() {
    const response = await fetch(URL_POSTS);
    const json = await response.json();
    return json;
}

async function getPostById(id) {
    const response = await fetch(URL_POSTS + "/" + id);
    const json = await response.json();
    return json;
}

async function postPost(post, personId){
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    }
    const response = await fetch(URL_POSTS + "/person/" + personId, config);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        //
    }
}

async function putPost(post, id){
    const config = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    }
    const response = await fetch(URL_POSTS + "/" + id, config);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        //
    }
}

async function deletePost(id){
    const config = {
        method: 'DELETE'
    }
    const response = await fetch(URL_POSTS + "/" + id, config);
    if (response.ok) {
        console.log(response)
    } else {
        //
    }
}

function hrefPost(id){
    return "pixelArtPost.html?post="+id;
}
