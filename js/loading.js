loadingDiv = document.querySelector("#loading");

function updateLoading() {
  var loadingMax = img.length + music.length;
  var loadingCurrent = imgLoaded + musicLoaded;
  var hexLoading = Math.round((loadingCurrent/loadingMax)*64);
  loadingDiv.innerHTML = "0x" + hexLoading.toString(16);
}

function musicLoading() {
  var mLoad = 0;
  var pLoad = 0;
  for(var i in audio) {
    if(audio[i].networkState == 1) {
      mLoad++;
    }
  }
  musicLoaded = mLoad;
  console.log("Loading: " + mLoad + "/" + music.length);
  updateLoading();
  if(mLoad == music.length && imgLoaded == img.length) {
    console.log("Content loaded");
    play(1);
    changeImg();
    changeColor();
    clearInterval(loadingInterval);
    loadingDiv.style.opacity = 0;
  }
}
