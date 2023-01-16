var imageList = JSON.parse(localStorage.getItem("mediaListStorage"))
var imagePlace = parseInt(localStorage.getItem("mediaPlaceInList"))
var maxLength = imageList.length
console.log(imageList)
console.log(imagePlace)
placeImages()
function placeImages() {
    if (imagePlace == 0) {
        document.querySelector(".large-image-left-side").src = imageList[maxLength-1]
        document.querySelector(".large-image").src = imageList[imagePlace]
        document.querySelector(".large-image-right-side").src = imageList[imagePlace+1]
    }
    else if (imagePlace == maxLength-1) {
        document.querySelector(".large-image-left-side").src = imageList[imagePlace-1]
        document.querySelector(".large-image").src = imageList[imagePlace]
        document.querySelector(".large-image-right-side").src = imageList[0]
    }
    else {
        document.querySelector(".large-image-left-side").src = imageList[imagePlace-1]
        document.querySelector(".large-image").src = imageList[imagePlace]
        document.querySelector(".large-image-right-side").src = imageList[imagePlace+1]
    }
}
function next() {
    if (imagePlace == maxLength-1) {
        imagePlace = 0
        placeImages()
    }
    else {
        imagePlace ++
        placeImages()
    }
}
function back() {
    if (imagePlace == 0) {
        imagePlace = maxLength-1
        placeImages()
    }
    else {
        imagePlace --
        placeImages()
    }
}