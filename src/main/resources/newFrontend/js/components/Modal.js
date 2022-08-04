
let modal = document.getElementById("modal");

let body = document.getElementById("body");

let isNonClosable = false;

const animation = [
  { transform: 'scale(1)' },
  { transform: 'scale(1.05)' },
  { transform: 'scale(1)' }
];

const animationTiming = {
  duration: 70,
  iterations: 1,
}

function newModalContent(content, title){
  let modalContent = document.createElement("div")
  modalContent.classList.add("modal-content");
  modalContent.classList.add("modal-dialog");

  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  let modalTitle = newTitle(title);
  modalHeader.appendChild(modalTitle);

  let modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.appendChild(content);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  return modalContent;
}

function newModalContentScrollable(content, title){
  let modalContent = newModalContent(content, title);
  modalContent.classList.add("modal-dialog-scrollable");

  return modalContent;
}

function openModal(content, title) {
  modal.replaceChildren();
  modal.appendChild(newModalContent(content, title));

  modal.style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function openNonClosableModal(content, title) {
  isNonClosable = true;
  modal.replaceChildren();
  modal.appendChild(newModalContentScrollable(content, title));

  modal.style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function closeModal() {
  if (isNonClosable === true) {
    isNonClosable = false;
  }
  modal.style.display = "none";
  modal.replaceChildren();
  document.body.classList.remove("stop-scrolling");
}

window.onclick = function (event) {
  if (event.target === modal) {
    if (isNonClosable === true) {
      // when user clicks outside show animation
      modal.animate(animation, animationTiming);
    }
    else {
      closeModal();
    }
  }
}

// document.querySelector(document).ready(function() {
//   document.querySelector(".child2").css("max-height", (document.querySelector(".parent").height()-document.querySelector(".child1").height()));
// });