loadingDiv = document.querySelector("#loading");

function updateLoading() {
  var loadingMax = img.length + music.length;
  var loadingCurrent = imgLoaded + musicLoaded;
  var hexLoading = Math.round((loadingCurrent/loadingMax)*64);
  loadingDiv.innerHTML = "0x" + hexLoading.toString(16);
}
