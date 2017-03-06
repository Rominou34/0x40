loadingDiv = document.querySelector("#loading");

function updateLoading() {
  var loadingMax = img.length + music.length;
  var loadingCurrent = imgLoaded + musicLoaded;
  var hexLoading = Math.round((loadingCurrent/loadingMax)*64);
  loadingDiv.innerHTML = "0x" + hexLoading.toString(16);
}

function displayMenu() {
  var menu = document.querySelector("#menu");
  menu.style.display = "flex";
}

function displayBeatBar() {
  var beatBar = document.querySelector("#beat");
  beatBar.style.display = "flex";
  beatBar.style.display = "flex";
}

function musicLoading() {
  var mLoad = 0;
  var pLoad = 0;
  for(var l in audio_loop) {
    if(audio_loop[l].networkState == 1) {
      mLoad++;
    }
  }
  for(var b in audio_build) {
    if(audio_build[b].networkState == 1) {
      mLoad++;
    }
  }
  musicLoaded = mLoad;
  console.log("Loading: " + mLoad + "/" + music.length);
  updateLoading();
  if(mLoad == (build_songs.length + loop_songs.length) && imgLoaded == img.length) {
    console.log("Content loaded");
    displayMenu();
    displayBeatBar();
    build(0);
    changeImg();
    changeColor();
    clearInterval(loadingInterval);
    loadingDiv.style.opacity = 0;
  }
}
