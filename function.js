var xhr = new XMLHttpRequest();
xhr.open("GET", "/randimgfolder", true);
xhr.responseType = 'document';
xhr.onload = () => {
  var mediaList = []
  if (xhr.status === 200) {
    var elements = xhr.response.getElementsByTagName("a");
    for (x of elements) {
      if ( x.href.match(/\.(jpe?g|png|gif|avif|mp4|webm)$/) ) {
          mediaList.push(x.href)
      } 
    };
  } 
  else {
    alert('Request failed. Returned status of ' + xhr.status);
  }
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  shuffle(mediaList)
  // Check the mediaList array
if (!mediaList || mediaList.length === 0) {
  console.error("The mediaList array is not defined or is empty!");
} else {
  console.log("The mediaList array is defined and has the following values:", mediaList);
}

// Check the .images-area element
let imagesArea = document.querySelector(".images-area");
if (!imagesArea) {
  console.error("The .images-area element was not found in the DOM!");
} else {
  console.log("The .images-area element was found in the DOM.");
}
  for (let i = 0; i < mediaList.length; i++) {
    let mediaOuter = document.createElement("div");
    let media = document.createElement("img");
    mediaOuter.classList.add("display-media-outer")
    mediaOuter.id = i+1
    media.classList.add("display-media")
    
    if(mediaList[i].endsWith('.mp4') || mediaList[i].endsWith('.webm')){
      media = document.createElement("video");
      media.src = mediaList[i];
      media.controls = true;
      media.mute = true;
      media.autoplay = true;
      media.loop = true;
      media.classList.add("display-media")
    } else {
      media.src = mediaList[i];
    }
    mediaOuter.appendChild(media);
    document.querySelector(".images-area").appendChild(mediaOuter);
  }
let mediaElements = document.querySelectorAll(".display-media-outer");
function openMedia(ID) {
  localStorage.setItem('mediaListStorage', JSON.stringify(mediaList));
  localStorage.setItem('mediaPlaceInList', ID-1);
  open("larger-media-view.html", "_self")
  }
  for (let element of mediaElements) {
  element.addEventListener("click", () => {
  openMedia(element.id);
  });
  }
  }
  xhr.send()

// --------------------------------------------------------------

// to access the list and place of image when opening a new page:
// 
//  console.log(JSON.parse(localStorage.getItem("imageListStorage")))
//  console.log(localStorage.getItem("imagePlaceInList"))
//