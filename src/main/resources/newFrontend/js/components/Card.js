
function newCurrentPersonCard(personJSON) {

  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.classList.add("personImage");
  img.src = personJSON.photoLink;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = newTitle(personJSON.name);

  let btn = newButton("Change person")
  btn.addEventListener('click', () => newSelectPersonForm());

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(btn);

  card.appendChild(img);
  card.appendChild(cardBody);

  return card;
}

function newPickPersonCard(personJSON) {

  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("mb-3");

  let row = document.createElement("div");
  row.classList.add("row");

  let col1 = document.createElement("div");
  col1.classList.add("col-4");

  let col2 = document.createElement("div");
  col2.classList.add("col-8");

  let img = document.createElement("img");
  img.classList.add("rounded-start");
  img.classList.add("mediumPersonImage");
  img.src = personJSON.photoLink;
  col1.appendChild(img);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = newTitle(personJSON.name);
  cardBody.appendChild(title);

  let btn = newButton("Choose me")
  btn.addEventListener('click', () => changeCurrentPerson(personJSON));
  cardBody.appendChild(btn);

  col2.appendChild(cardBody);

  row.appendChild(col1);
  row.appendChild(col2);

  card.appendChild(row);

  return card;
}

function newPixelArtPostCard(post) {

  let card = document.createElement("div");
  card.classList.add("card");

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  let img = document.createElement("img");
  img.classList.add("smallPersonImage");
  img.src = post.person.photoLink;
  cardHeader.appendChild(img);
  cardHeader.appendChild(document.createTextNode(post.person.name));

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let pixelArt = document.createElement("div");
  pixelArt.classList.add("pixelArt");
  pixelArt.classList.add("mb-3")

  for (let pxl of post.pixelArtAsJSON.grid) {

    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = pxl.color;

    pixelArt.appendChild(pixel);
  }

  let title = newTitle(post.title);
  let date = newDate(post.postDate);

  let btn = newButton("Go to post");
  btn.addEventListener('click', () => changeCurrentPixelArtPost(post.id));
  btn.href = "pixelArtPost.html";

  cardBody.appendChild(pixelArt);
  cardBody.appendChild(title);
  cardBody.appendChild(date);
  cardBody.appendChild(btn);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  return card;
}

function newPixelArtPostCommentSectionCard(post, comments) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "50vw";

  let header = document.createElement("div");
  header.classList.add("card-header");

  let img = document.createElement("img");
  img.classList.add("smallPersonImage");
  img.src = post.person.photoLink;
  header.appendChild(img);
  header.appendChild(document.createTextNode(post.person.name));
  card.appendChild(header);

  let row = document.createElement("div");
  row.classList.add("row");

  let pixelArt = document.createElement("div");
  pixelArt.classList.add("col-8");
  pixelArt.classList.add("pixelArt");
  for(let pxl of post.pixelArtAsJSON.grid){
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = pxl.color;
    pixelArt.appendChild(pixel);
  }
  row.appendChild(pixelArt);

  let col4 = document.createElement("div");
  col4.classList.add("col-4");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.classList.add("commentSection");

  for(let cmt of comments){
    let comment = document.createElement("div");
    comment.classList.add("mb-2");
    
    let img = document.createElement("img");
    img.classList.add("smallPersonImage");
    img.src = cmt.person.photoLink;

    comment.appendChild(img);
    comment.appendChild(document.createTextNode(cmt.person.name + ": " + cmt.text));

    let date = newDate(cmt.commentDate);

    comment.appendChild(date);
    
    cardBody.appendChild(comment);
  }

  col4.appendChild(cardBody);
  row.appendChild(col4);

  card.appendChild(row);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  let input = newCommentInput(); 
  cardFooter.appendChild(input);

  card.appendChild(cardFooter);

  return card;
}