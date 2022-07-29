const URL_COMMENTS = 'http://localhost:8080/posts'

async function getAllComments() {
    const response = await fetch(URL_COMMENTS);
    const json = await response.json();
    return json;
}
