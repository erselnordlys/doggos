// описания

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


var dFP = "images/doge-full-image.jpg"; // первая пикча доге
var dSP = "images/doge-2.jpg"; //вторая пикча доге
var dTP = "images/doge-3.jpg"; //третья пикча доге

var hFP ="images/husky.jpg";
var hSP ="images/husky-2.jpg";
var hTP ="images/husky-3.jpg";


var dogMap = {
  "doge": {
    "id": "doge",
    "name": "Doge",
    "picture": dFP,
    "description": textDoge
  },
  "husky": {
    "id": "husky",
    "name": "Husky",
    "picture": hFP,
    "description": textHusky
  },
  "doggest": {
    "id": "doggest",
    "name": "Doggest",
    "picture": " ",
    "description": " "
  },
  "shiber": {
    "id": "shiber",
    "name": "Shiber",
    "picture": " ",
    "description": " "
  },
  "puggerino": {
    "id": "puggerino",
    "name": "Puggerino",
    "picture": " ",
    "description": " "
  },
  "pupper": {
    "id": "pupper",
    "name": "Pupper",
    "picture": " ",
    "description": " "
  },
  "shoobi": {
    "id": "shoobi",
    "name": "Shoobi",
    "picture": " ",
    "description": " "
  }
};

// var way = "";

function countLength() {
  var length = 0;
  for (key in dogMap) {
    length++;
  }
  return length;
}

function listDoggos() {
  var length = countLength(); // количество ключей в объекте
  // alert(length);

  var list = document.getElementById("leftside-list");
  for (var i = 0; i < length; i++) {
    list.insertAdjacentHTML("beforeEnd", "<button></button>");
  }
  var i = 0;
  for (var key in dogMap) {
    list.children[i].id = dogMap[key]["id"];
    list.children[i].innerHTML = dogMap[key]["name"];
    var way;
    way = dogMap[key]["picture"]; // тут работает и появляется ссылка

    addListenerToView(list.children[i], key);
    i++;
  }
}



function addListenerToView(childViewParam, dogCategoryParam) {
  childViewParam.addEventListener('click', () => {
  showFirstInfo(dogCategoryParam)
  });
}

function changeHeight() {
  document.getElementById("photo-description").classList.toggle("extended");
}
// при нажатии на кнопку
function showFirstInfo(url) {
  // alert(url);
  document.getElementById("current-photo").src = url; // показать фото
  document.getElementById("photo-description").style.display = "flex"; //  показать блок с описанием
  document.getElementById("text").style.display = "flex" ; // загрузить текст
}

// открывать и закрывать текст
function showInfo() {
  if (document.getElementById("photo-description").className != "extended") { // если текст свернут
    document.getElementById("reveal-button").innerHTML = "Show less..."; // поменять текст на кнопке
  } else {
    document.getElementById("reveal-button").innerHTML = "Show more..."; // поменять текст кнопки
  }
  changeHeight();
}

function getNextPic() {}
