
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


// вторая часть текста

var textDoge = "Doge is an Internet meme that became popular in 2013. The meme typically consists of a picture " +
"of a Shiba Inu accompanied by multicolored text in Comic Sans font in the foreground. The text, representing a " +
"kind of internal monologue, is deliberately written in a form of broken English. " +
"The meme is based on a 2010 photograph, and became popular in late 2013, being named as Know Your Meme's \"top meme\" " +
"of that year. A cryptocurrency based on Doge, the Dogecoin, was launched in December 2013, and the Shiba Inu has " +
"been featured on Josh Wise's NASCAR car as part of a sponsorship deal. Doge has also been referenced by members " +
"of the United States Congress, a safety video for Delta Air Lines, a Google Easter egg, and the video for the song " +
"\"Word Crimes\" by \"Weird Al\" Yankovic.";

var textHusky =  "Husky is a general name for a sled-type of dog used in northern regions, differentiated " +
"from other sled-dog types bytheir fast pulling style. They are an ever-changing cross-breed of the fastest dogs. " +
"The Alaskan Malamute, by contrast, is \"the largest and most powerful\" sled dog, and was used for heavier loads. " +
" Huskies are used in sled dog racing. In recent years, companies have been marketing tourist treks with dog sledges " +
"for adventure travelers in snow regions as well. Huskies are also today kept as pets, and groups work to find new pet " +
"homes for retired racing and adventure trekking dogs." +
"Huskies are energetic and athletic. They usually have a thick double coat that can be gray, black, copper red, or white." +
"Their eyes are typically pale blue, although they may also be brown, green, blue, yellow, or heterochromic. Huskies " +
"are more prone to some degree of uveitis than most other breeds.";

var textDoggest = "";
var textShiber = "";
var textPuggerino = "";
var textPupper = "";
var abourShoobi = "";

var textArray = [textDoge, textHusky, textDoggest, textShiber, textPuggerino, textPupper, abourShoobi];


// изображения фона

var dogeImage = "url(\"images/doge-full-image.jpg\")";
var huskyImage = "url(\"images/husky-full-image.jpg\")";
var doggestImage = "";
var shiberImage = "";
var puggerinoImage = "";
var pupperImage = "";
var shoobiImage = "";

var currentImageArray = [dogeImage, huskyImage, doggestImage, shiberImage, puggerinoImage, pupperImage, shoobiImage];

function changeHeight() {
  document.getElementById("photo-description").classList.toggle("extended");
}

// показать или скрыть описания

function showFirstInfo(curNum) {
  document.getElementsByClassName("photo-box")[0].style.backgroundImage = currentImageArray[curNum]; // показать фото
  document.getElementById("photo-description").style.display = "flex"; //  показать блок с описанием
  document.getElementById("text").innerHTML = textArray[curNum]; // загрузить текст
}

function showInfo() { // открывать и закрывать текст
  if (document.getElementById("photo-description").className != "extended") { // если текст свернут
    document.getElementById("reveal-button").innerHTML = "Show less..."; // поменять текст на кнопке
  } else {
    document.getElementById("reveal-button").innerHTML = "Show more..."; // поменять текст кнопки
  }
  changeHeight();
}
