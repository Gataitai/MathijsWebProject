
let modal = document.getElementById("modal");

let body = document.getElementById("body");

const animation = [
    { transform: 'scale(1)' },
    { transform: 'scale(1.05)' },
    { transform: 'scale(1)' }
  ];
 
const animationTiming = {
    duration: 70,
    iterations: 1,
  }
  
openModal("choose a person")  

async function openModal(title){
    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content");
    modalContent.classList.add("modal-dialog");
    modalContent.classList.add("modal-dialog-scrollable");

    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    let modalTitle = document.createElement("h5");
    modalContent.classList.add("modal-title");
    modalTitle.appendChild(document.createTextNode(title));
    modalHeader.appendChild(modalTitle);

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    for(let person of await getAllPeople()){
        console.log(person);
        let personCard = chooseMePersonCard(person);
        modalBody.appendChild(personCard);
    }

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    
    modal.appendChild(modalContent);

    modal.style.display = "block";
    document.body.classList.add("stop-scrolling");
}

function closeModal(){
  modal.style.display = "none";
  modalContent.replaceChildren();
  document.body.classList.remove("stop-scrolling");
}
  
  // when user clicks outside show animation
  window.onclick = function(event) {
    if (event.target === modal) {
        modal.animate(animation, animationTiming);
    }
  }

  