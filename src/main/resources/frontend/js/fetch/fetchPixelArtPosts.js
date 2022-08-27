const URL_POSTS = 'http://localhost:8080/posts';

async function getAllPosts() {
    const response = await fetch(URL_POSTS);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving posts");
    }
}

async function getPostById(id) {
    const response = await fetch(URL_POSTS + "/" + id);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving post by id");
    }
}

async function getAllPostsByTitle(title) {
    const response = await fetch(URL_POSTS + "/title?title=" + title);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving posts by title");
    }
}

async function getAllPostsByPersonName(name) {
    const response = await fetch(URL_POSTS + "/person?name=" + name);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving posts by person name");
    }
}

async function getAllPostsByPersonId(id) {
    const response = await fetch(URL_POSTS + "/person/" + id);
    if (response.ok) {
        //return json
        return response.json();
    } else {
        console.log("Something went wrong with retrieving posts by person id");
    }
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
        console.log("Something went wrong with posting post");
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
        console.log("Something went wrong with updating post");
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
        console.log("Something went wrong with deleting post");
    }
}

function hrefPost(id){
    return "pixelArtPost.html?post="+id;
}
