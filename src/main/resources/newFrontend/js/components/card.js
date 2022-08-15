
function newCurrentPersonCard(personJSON) {

  let card = document.createElement("div");
  card.classList.add("card");

  let img = newBigPersonImage(personJSON.photoLink, personJSON.id)

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.classList.add("d-grid");
  cardBody.classList.add("gap-3");

  let cardTitle = newTitle(personJSON.name);

  let options = newOptionsButton();
  options.style.float = "right";
  options.style.lineHeight = "2rem";
  options.addEventListener('click', () => personOptionsForm(personJSON.id));
  cardTitle.appendChild(options);

  let newPostBtn = newButton("New pixelart", "btn-primary");
  newPostBtn.addEventListener('click', () => PixelArtPostForm())

  let changePersonBtn = newButton("Log out", "btn-danger");
  changePersonBtn.addEventListener('click', () => logOut());

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(newPostBtn);
  cardBody.appendChild(changePersonBtn);

  let cardFooter = document.createElement("footer");
  cardFooter.classList.add("card-footer");
  cardFooter.classList.add("text-muted");
  cardFooter.classList.add("text-center");
  cardFooter.appendChild(document.createTextNode("© Copyright Mathijs 2022"))

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  return card;
}

function newPersonInfoCard(personJSON) {

  let card = document.createElement("div");
  card.classList.add("card");

  let img = newBigPersonImage(personJSON.photoLink, personJSON.id)

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.style.display = "grid";
  cardBody.style.gap = "1rem";

  let cardTitle = newTitle(personJSON.name+"'s profile");
  cardBody.appendChild(cardTitle);

  let cardFooter = document.createElement("footer");
  cardFooter.classList.add("card-footer");
  cardFooter.classList.add("text-muted");
  cardFooter.classList.add("text-center");
  cardFooter.appendChild(document.createTextNode("© Copyright Mathijs 2022"))

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  return card;
}

function newSearchCard(imageContent, titleContent, buttonText, hrefAction, hrefId) {

  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("mb-3");

  let row = document.createElement("div");
  row.classList.add("row");

  let col1 = document.createElement("div");
  col1.classList.add("col-4");

  let col2 = document.createElement("div");
  col2.classList.add("col-8");

  col1.appendChild(imageContent);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  cardBody.appendChild(titleContent);

  let btn = newButton(buttonText, "btn-primary")
  btn.addEventListener('click', () => window.location.href = hrefAction(hrefId))
  cardBody.appendChild(btn);

  col2.appendChild(cardBody);

  row.appendChild(col1);
  row.appendChild(col2);

  card.appendChild(row);

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

  let img = newMediumPersonImage(personJSON.photoLink, personJSON.id);
  img.classList.add("rounded-start");
  col1.appendChild(img);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = newTitle(personJSON.name);
  cardBody.appendChild(title);

  let btn = newButton("Choose me", "btn-primary")
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

  let img = newSmallPersonImage(post.person.photoLink, post.person.id)
  img.classList.add("me-2");
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

  let btn = newButton("Go to post", "btn-primary");
  btn.href = hrefPost(post.id);

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
  card.style.width = "60vw";

  let header = document.createElement("div");
  header.classList.add("card-header");

  let img = newSmallPersonImage(post.person.photoLink, post.person.id)
  img.classList.add("me-2");
  header.appendChild(img);
  header.appendChild(document.createTextNode(post.person.name));

  let options = newOptionsButton();
  options.style.float = "right";
  options.style.lineHeight = "2rem";
  options.addEventListener('click', () => pixelArtPostOptionsForm(post.id));
  header.appendChild(options);
  card.appendChild(header);

  let row = document.createElement("div");
  row.classList.add("row");

  let pixelArt = document.createElement("div");
  pixelArt.classList.add("col-8");
  pixelArt.classList.add("pixelArt");
  pixelArt.id = "pixelArt";
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
  col4.classList.add("col-4");
  cardBody.classList.add("card-body");
  cardBody.classList.add("commentSection");
  cardBody.id = "commentSection";

  for(let cmt of comments){
    let comment = document.createElement("div");
    comment.id = "comment" + cmt.id;
    comment.appendChild(newComment(cmt));
    cardBody.appendChild(comment);
  }

  col4.appendChild(cardBody);
  row.appendChild(col4);

  card.appendChild(row);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  let cmt = {
    text: ""
  }

  let input = newCommentInput(sendComment, cmt,"Post comment", "postCommentInput");
  cardFooter.appendChild(input);

  card.appendChild(cardFooter);

  return card;
}