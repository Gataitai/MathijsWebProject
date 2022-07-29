const URL_COMMENTS = 'http://localhost:8080/comments'

async function getCommentsFromPostById(id) {
    const response = await fetch(URL_COMMENTS + "/post/" + id);
    const json = await response.json();
    return json;
}
