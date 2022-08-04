
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
  img.classList.add("me-2");
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

function newEmptyPersonCard(){
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.classList.add("personImage");
  img.src = "pictures/questionMark.png";
  card.appendChild(img);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = document.createElement("h5");
  title.classList.add("card-title");
  title.classList.add("placeholder-glow");
  
  let line1 = document.createElement("a");
  line1.classList.add("btn");
  line1.classList.add("btn-secondary");
  line1.classList.add("disabled");
  line1.classList.add("placeholder");
  line1.classList.add("col-2");

  let line2 = document.createElement("a");
  line2.classList.add("btn");
  line2.classList.add("btn-secondary");
  line2.classList.add("disabled");
  line2.classList.add("placeholder");
  line2.classList.add("col-6");
  line2.classList.add("m-2");
  title.appendChild(line1);
  title.appendChild(line2);
  cardBody.appendChild(title);

  let line3 = document.createElement("a");
  line3.classList.add("btn");
  line3.classList.add("btn-primary");
  line3.classList.add("disabled");
  line3.classList.add("placeholder");
  line3.classList.add("col-4");
  cardBody.appendChild(line3);
  
  card.appendChild(cardBody);
  return card;
}

function newPixelArtPostCommentSectionCard(post, comments) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "60vw";

  let header = document.createElement("div");
  header.classList.add("card-header");

  let img = document.createElement("img");
  img.classList.add("smallPersonImage");
  img.classList.add("me-2");
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
  cardBody.id = "commentSection";

  for(let cmt of comments){
    let comment = newComment(cmt);
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