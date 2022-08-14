
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

function newModalContentWithFooter(content, contentFooter, title){
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

  let modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");
  modalFooter.appendChild(contentFooter);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  return modalContent;
}

function newSearchModalContent(content, contentHeader){
  let modalContent = document.createElement("div")
  modalContent.classList.add("modal-content");
  modalContent.classList.add("modal-dialog");
  modalContent.classList.add("modal-dialog-scrollable");

  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalHeader.style.display = "inline";
  modalHeader.appendChild(contentHeader);

  let modalBody = document.createElement("div");
  modalBody.id = "searchModal";
  modalBody.classList.add("modal-body");
  modalBody.appendChild(content);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  return modalContent;
}

function newModalContentScrollable(content, contentFooter, title){
  let modalContent = document.createElement("div")
  modalContent.classList.add("modal-content");
  modalContent.classList.add("modal-dialog");
  modalContent.classList.add("modal-dialog-scrollable");

  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  let modalTitle = newTitle(title);
  modalHeader.appendChild(modalTitle);

  let modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.appendChild(content);

  let modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");
  modalFooter.appendChild(contentFooter);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  return modalContent;
}

function openModal(content, title) {
  modal.replaceChildren();
  modal.appendChild(newModalContent(content, title));

  modal.style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function openSearchModal(content, contentHeader) {
  modal.replaceChildren();
  modal.appendChild(newSearchModalContent(content, contentHeader));

  modal.style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function openNonClosableModal(content, contentFooter, title) {
  isNonClosable = true;
  modal.replaceChildren();
  modal.appendChild(newModalContentScrollable(content, contentFooter, title));

  modal.style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function openNonClosableModalShort(content, contentFooter, title) {
  isNonClosable = true;
  modal.replaceChildren();
  modal.appendChild(newModalContentWithFooter(content, contentFooter, title));

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