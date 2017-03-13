
function getArrow() {
  document.getElementsByClassName("rightside-box")[0].style.backgroundColor = "blue";
  document.getElementsByClassName("next-arrow")[0].style.visibility = "visible";

}

function eraseArrow() {
  document.getElementsByClassName("rightside-box")[0].style.backgroundColor = "white";
  document.getElementsByClassName("next-arrow")[0].style.visibility = "hidden";

}

function getNextItem() {
  document.getElementsByClassName("current-photo")[0].src = "";
}
