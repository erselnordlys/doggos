

var currentDogIndex;
var currentDogId;

var dogs_array;
var dogs_photos;

var countMap = {
    "doge": 0,
    "husky": 0
};

window.onload = main;



function main() {

    console.log('main');
    firebase.database().ref("dogs_array").on('value', onDogsLoaded, onNetworkError);
}


function onDogsLoaded(snapshot) {
    console.log('onDogsLoaded');
    dogs_array = snapshot.val();
    listDoggos();

    openSelectedDog(0);
}

// загрузить список собак
function listDoggos() {
    var list = document.getElementById("leftside-list");
    for (var i = 0; i < dogs_array.length; i++) {
        list.insertAdjacentHTML("beforeEnd", "<div></div>");
        var listItem = list.children[i];
        listItem.id = dogs_array[i].id;
        listItem.innerHTML = dogs_array[i].name;
        listItem.className += "leftside-menu__item";
        var url = dogs_array[i].picture_url;
        listItem.style.backgroundImage = "url('" + url + "')";

        addListenerToView(listItem, i);
    }

    console.log("list was created");
    console.log("add default photo");

}

// добавить событие по клику
function addListenerToView(childView, i) { // добавить onclick
    childView.addEventListener('click', () => {
        openSelectedDog(i);
    });
}

// выбрать категорию
function openSelectedDog(i) {
    currentDogIndex = i;
    currentDogId = dogs_array[i].id;
    firebase.database().ref("dogs_photos/" + currentDogId).on('value', onPhotosLoaded, onNetworkError);
}


function onPhotosLoaded(snapshot) {
    console.log('onPhotosLoaded');
    dogs_photos = snapshot.val();
    var currentDogCount = countMap[currentDogId];

    showPhoto(dogs_photos[currentDogCount]);
    showDesc(dogs_array[currentDogIndex].description);

    hidePageLoader();
}

// загрузить фото
function showPhoto(photo) {
    document.getElementById("current-photo").src = photo; // показать фото

}

// загрузить описание
function showDesc(desc) {
    document.getElementById("photo-description-id").classList.remove("photo-description_hidden"); // показать блок с описанием
    document.getElementById("text").innerHTML = desc; // загрузить текст
}

// свернуть/развернуть описание; поменять текст кнопки
function revealText() {
    if (document.getElementById("photo-description-id").className != "photo-description extended") { // если текст свернут
        document.getElementById("reveal-button").innerHTML = "Show less..."; // поменять текст на кнопке
    } else {
        document.getElementById("reveal-button").innerHTML = "Show more..."; // поменять текст кнопки
    }
    changeHeight();
}

// поменять высоту блока описания
function changeHeight() {
    document.getElementById("photo-description-id").classList.toggle("extended");
}

// открыть следующее фото по клику
function getNextPic() {

    displayPhotoLoader();
    document.getElementById("current-photo").src = "";

    var currentDogCount = countMap[currentDogId];
    currentDogCount = (currentDogCount + 1) % dogs_photos.length;
    countMap[currentDogId] = currentDogCount;

    document.getElementById("current-photo").src = dogs_photos[currentDogCount];
}

// показать/скрыть загрузчик
function hidePageLoader() {
        document.getElementById("page-loader").classList.add("loader_hidden");
}

function displayPhotoLoader() {
    document.getElementById("photo-loader").classList.remove("loader_hidden");

}


function onNetworkError(error) {
    console.log(error);
}
