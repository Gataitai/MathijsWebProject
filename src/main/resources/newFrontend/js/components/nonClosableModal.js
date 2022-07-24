
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

async function openModal(content){
    modal.replaceChildren();
    modal.appendChild(content);

    modal.style.display = "block";
    document.body.classList.add("stop-scrolling");
}

function closeModal(){
  modal.style.display = "none";
  modal.replaceChildren();
  document.body.classList.remove("stop-scrolling");
}
  
  // when user clicks outside show animation
  window.onclick = function(event) {
    if (event.target === modal) {
        modal.animate(animation, animationTiming);
    }
  }

  