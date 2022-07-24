
function currentUserCard(personJSON){

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("personImage");
    img.src=personJSON.photoLink;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("mb-3");
    cardTitle.appendChild(document.createTextNode(personJSON.name));

    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.addEventListener('click', () => pickPersonForm());
    btn.appendChild(document.createTextNode("Change person"));

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(btn);

    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

function pickPersonCard(personJSON){

  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("mb-3");

  let row = document.createElement("div");
  row.classList.add("row");

  let col1 = document.createElement("div");
  col1.classList.add("col-4");

  let img = document.createElement("img");
  img.classList.add("rounded-start");
  img.classList.add("smallPersonImage");
  img.src=personJSON.photoLink;
  col1.appendChild(img);

  let col2 = document.createElement("div");
  col2.classList.add("col-8");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = document.createElement("h5");
  title.classList.add("card-title");
  title.classList.add("mb-2");
  title.appendChild(document.createTextNode(personJSON.name));
  cardBody.appendChild(title);

  let btn = document.createElement("a");
  btn.classList.add("btn");
  btn.classList.add("btn-primary");
  btn.appendChild(document.createTextNode("Choose me"));
  btn.addEventListener('click', () => changeCurrentUser(personJSON));
  cardBody.appendChild(btn);

  col2.appendChild(cardBody);

  row.appendChild(col1);
  row.appendChild(col2);

  card.appendChild(row);

  return card;
}
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

{/* <div class="card mb-3">
  <div class="row g-0">
    <div class="col-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-8">
      <div class="card-body">
        <h5 class="card-title mb-2">Card title</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div> */}