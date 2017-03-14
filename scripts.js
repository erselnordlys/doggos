
function getArrow() {
  document.getElementsByClassName("rightside-box")[0].style.display = "flex";
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

// показываем описание к Doge

function showDogeInfo() {
  document.getElementsByClassName("photo-discription")[0].style.display = "flex";
  document.getElementsByClassName("photo-discription")[0].getElementsByClassName("doge-disc")[0].style.display = "flex";
  document.getElementsByClassName("first-part")[0].style.display = "flex";

}

function revealMoreDoge() {
  document.getElementsByClassName("show-more")[0].style.display = "none";
  document.getElementsByClassName("second-part")[0].style.display = "flex";
  document.getElementsByClassName("photo-discription")[0].style.height = "240px";
}
