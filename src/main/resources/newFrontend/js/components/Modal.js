
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

function openModal(content){
    modal.replaceChildren();
    modal.appendChild(content);
  
    modal.style.display = "block";
    document.body.classList.add("stop-scrolling");
}
  
function openNonClosableModal(content){
    isNonClosable = true;
    modal.replaceChildren();
    modal.appendChild(content);

    modal.style.display = "block";
    document.body.classList.add("stop-scrolling");
}

function closeModal(){
  if(isNonClosable === true){
    isNonClosable = false;
  }
  modal.style.display = "none";
  modal.replaceChildren();
  document.body.classList.remove("stop-scrolling");
}

window.onclick = function(event) {
  if (event.target === modal) {
    if(isNonClosable === true){
      // when user clicks outside show animation
      modal.animate(animation, animationTiming);
    }
    else{
      closeModal();
    }
  }
}