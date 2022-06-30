let modal = document.getElementById("modal");

let modalContent = document.getElementById("modalContent");

let body = document.getElementById("body");

function openModal(content){
    modalContent.appendChild(content);

    modal.style.display = "block";
    document.body.classList.add("stop-scrolling");
}

function closeModal(){
  modal.style.display = "none";
  modalContent.replaceChildren();
  document.body.classList.remove("stop-scrolling");
}
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modalContent.replaceChildren();
      document.body.classList.remove("stop-scrolling");
    }
  }


  