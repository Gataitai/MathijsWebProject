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



