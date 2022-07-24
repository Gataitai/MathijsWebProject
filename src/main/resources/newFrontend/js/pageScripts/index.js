pickPersonForm()

function changeCurrentUser(personJSON){
    let personContainer = document.getElementById("personSectionContainer");
    personContainer.replaceChildren();
    personContainer.appendChild(currentUserCard(personJSON));
    closeModal();
}