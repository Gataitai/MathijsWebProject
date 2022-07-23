function chooseMePersonCard(personJSON){

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src="pictures/1.png";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    cardTitle.appendChild(document.createTextNode(personJSON.name));

    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.appendChild(document.createTextNode("Choose me"));
    btn.href="";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(btn);

    card.appendChild(img);
    card.appendChild(cardBody);

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