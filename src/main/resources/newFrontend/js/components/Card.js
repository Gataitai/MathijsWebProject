
function newCurrentPersonCard(personJSON) {

  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.classList.add("personImage");
  img.src = personJSON.photoLink;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = newTitle(personJSON.name);

  let btn = newbutton("Change person")
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

  let btn = newbutton("Choose me")
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

  let btn = newbutton("Go to post");
  btn.addEventListener('click', () => changeCurrentPixelArtPost(post.id));
  btn.href = "pixelArtPost.html";

  cardBody.appendChild(pixelArt);
  cardBody.appendChild(title);
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
    for (let i = 0; i < 100; i++) {
      let comment = document.createElement("div");
      comment.classList.add("mb-2");
      
      let img = document.createElement("img");
      img.classList.add("smallPersonImage");
      img.src = cmt.person.photoLink;
  
      comment.appendChild(img);
      comment.appendChild(document.createTextNode(cmt.person.name + ": " + cmt.text));

      let date = document.createElement("p");
      date.classList.add("text-muted");
      date.appendChild(document.createTextNode("july 18th 2008"));

      comment.appendChild(date);
      
      cardBody.appendChild(comment);
    }
  }

  col4.appendChild(cardBody);
  row.appendChild(col4);

  card.appendChild(row);
  return card;
}

/* <div class="card" style="width: 50vw;">
<div class="card-header">
  <img class="smallPersonImage" src="https://cdn.discordapp.com/attachments/1001277448329109666/1001277877247017001/1.png">Mathijs
</div>
<div class="row">
  <div class="col-8 pixelArt">
    <div class="pixel" style="background-color: rgb(139, 180, 195);"></div>
  ...
  </div>
  <div class="col-4">
    <div class="card-body commentSection">
      <div class="mb-2">
        <img class="smallPersonImage" src="https://cdn.discordapp.com/attachments/1001277448329109666/1001277877247017001/1.png">Mathijs: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam est illum, officiis rem aliquam assumenda recusandae eaque alias, commodi architecto, incidunt obcaecati consectetur soluta vitae dolorum facilis repellat. Reprehenderit, eveniet rem. Amet nihil facere perferendis, assumenda cum dolorem exercitationem rerum! Beatae, eius quae! Tenetur fugiat provident nihil alias sequi.
      </div>
    </div>
  </div>
</div>
</div> */