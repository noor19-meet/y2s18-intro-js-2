// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg', './imgs/download.jpeg', './imgs/download(1).jpeg', './imgs/download(2).jpeg', './imgs/download(3).jpeg', './imgs/download(4).jpeg'];

var currentIndex = 0;

document.getElementsByTagName("img")[0].addEventListener("click", showNextPicture)
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
if(currentIndex >= pictures.length) {
	currentIndex =0;

}

  if (currentIndex >= pictures.length) {

    currentIndex = 0;
  }

document.getElementsByTagName("img")[0].src=pictures[currentIndex]

		
  // YOUR TASK: Finish this function!
}