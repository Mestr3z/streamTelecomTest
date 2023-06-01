const openBtn = document.querySelector(".button");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__closebtn");

function handlePopupOpen() {
  popup.classList.remove("popup");
  popup.classList.add("popup__active");
}

function handlepPopupClose() {
  popup.classList.add("popup");
  popup.classList.remove("popup__active");
}

function handlePopupCloseByKey(event) {
  if (event.keyCode === 27) {
    handlepPopupClose();
  }
}

function handleOverlayClick(event) {
  if (
    !popup.contains(event.target) &&
    event.target !== openBtn &&
    !openBtn.contains(event.target)
  ) {
    handlepPopupClose();
  }
}

openBtn.addEventListener("click", handlePopupOpen);
closeBtn.addEventListener("click", handlepPopupClose);
document.addEventListener("keydown", handlePopupCloseByKey);
document.addEventListener("click", handleOverlayClick);
