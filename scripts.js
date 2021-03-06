

var currentDogIndex;
var currentDogId;

var dogs_array;
var dogs_photos;
var prevDogId;

var countMap = {
    "doge": 0,
    "husky": 0
};

window.onload = main;


function main() {

    firebase.database().ref("dogs_array").on('value', onDogsLoaded, onNetworkError);
}


function onDogsLoaded(snapshot) {
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

}

// добавить событие по клику
function addListenerToView(childView, i) { // добавить onclick
    childView.addEventListener('click', () => {
        openSelectedDog(i);
    });
}

// выбрать категорию
function openSelectedDog(i) {

    deactivatePrevCat();

    document.getElementById("current-photo").src = "";

    currentDogIndex = i;
    currentDogId = dogs_array[i].id;
    firebase.database().ref("dogs_photos/" + currentDogId).on('value', onPhotosLoaded, onNetworkError);

    activateCategoryStyle(currentDogId);
}

function onPhotosLoaded(snapshot) {
    dogs_photos = snapshot.val();
    var currentDogCount = countMap[currentDogId];

    showPhoto(dogs_photos[currentDogCount]);
    showDesc(dogs_array[currentDogIndex].description); // временно неактивное действие

    hidePageLoader();

    setPhotoCounters(countMap[currentDogId], dogs_photos.length);
}

// загрузить фото
function showPhoto(photo) {
    document.getElementById("current-photo").src = photo; // загрузить фото
    document.getElementById("current-photo").classList.remove("photo-box__current-photo_hidden"); // показать фото
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


    setPhotoCounters(countMap[currentDogId], dogs_photos.length);
    document.getElementById("current-photo").src = dogs_photos[currentDogCount];
}

// открыть предыдущее фото по клику 
function getPreviousPic() {
    document.getElementById("current-photo").src = "";

    var currentDogCount = countMap[currentDogId] - 1;
    if (currentDogCount < 0) {
        currentDogCount = dogs_photos.length - 1;
    }

    countMap[currentDogId] = currentDogCount;

    setPhotoCounters(countMap[currentDogId], dogs_photos.length);
    document.getElementById("current-photo").src = dogs_photos[currentDogCount];
}

// скрыть загрузчик страницы
function hidePageLoader() {
        document.getElementById("page-loader").classList.add("loader_hidden");
}

// отобразить загрузчик фото
function displayPhotoLoader() {
    document.getElementById("photo-loader").classList.remove("loader_hidden");

}

// затемнить выбранную категорию
function activateCategoryStyle(curCat) {
        document.getElementById(curCat).classList.add('leftside-menu__item_active');
        prevDogId = curCat;
}

// убрать затемнение с категории
function deactivatePrevCat() {
    if (prevDogId !== undefined) {
        document.getElementById(prevDogId).classList.remove("leftside-menu__item_active");
    }
}

// посчитать текущий номер фото и тотал
function setPhotoCounters(curNum, totalNum) {
    document.getElementById('currentPhotoNumber').innerHTML = curNum + 1;
    document.getElementById('totalPhotosNumber').innerHTML = totalNum;
}

// подсветить стрелочку
function highlightArrow(hoveredArrow) {
    document.getElementById(hoveredArrow).classList.add('photo-box__arrow_hightlighted');
}

// убрать подсвечивание стрелочки
function cancelArrowHighlight(inactiveArrow) {
    document.getElementById(inactiveArrow).classList.remove('photo-box__arrow_hightlighted');

}

// поменять цвет сердца
function changeHeartColor() {

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        document.getElementsByClassName('like__like-heart_before')[0].style.background = color;
        document.getElementsByClassName('like__like-heart_after')[0].style.background = color;
}

// окно с лайком всплывает
function showLikeWindow() {
    document.getElementById('like-window').classList.remove('like__like-window_hidden');
}

// окно с лайком исчезает
function hideLikeWindow() {
    document.getElementById('like-window').classList.add('like__like-window_hidden');
}

function onNetworkError(error) {
    console.log(error);
}

