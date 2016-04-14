for(var p in pictures) {
  var addImg = new Image();
  addImg.src = pictures[p].url;
  addImg.onload = function() {
    imgLoaded++;
    console.log("Image loaded (" + imgLoaded + "/" + img.length + ")");
    //updateLoading();
    if(imgLoaded == img.length) {
      console.log("-- All images loaded --");
    }
  }
  img.push(addImg);
}

function displayBeat() {
  var beatLeft = beatDiv.querySelector("span:first-child");
  var beatRight = beatDiv.querySelector("span:last-child");
  var beatCenter = beatDiv.querySelector(".big-beat");

  // Left
  var strLeft = "";
  var beat_max = beatMap[currentBeat].beat.length;
  for(var i=0; i < 20; i++) {
    strLeft = beatMap[currentBeat].beat.charAt((i+beat_pos)%beat_max) + strLeft;
  }
  beatLeft.innerHTML = strLeft;

  // Right
  var strRight = "";
  for(var i=0; i < 20; i++) {
    strRight += beatMap[currentBeat].beat.charAt((i+beat_pos)%beat_max);
  }
  beatRight.innerHTML = strRight;

  if(beatMap[currentBeat].beat.charAt(beat_pos) != '.') {
    beatCenter.innerHTML = beatMap[currentBeat].beat.charAt(beat_pos);
  } else {
    beatCenter.innerHTML = ' ';
  }

}

function playBeatAnimation(beat_char) {
  if(beat_char == 'x') {
    waifuDiv.innerHTML = "";
    var randomImg = Math.round(Math.random()*(img.length-1));
    //imgDiv.appendChild(img[randomImg]);
    waifuDiv.style.backgroundImage = "url('"+img[randomImg].src+"')";
  }
  if(beat_char == 'o') {
    var randomColor = Math.round(Math.random()*(colors.length-1));
    //visualsDiv.style.backgroundColor = colors[randomColor];
    var h = document.querySelector("html");
    h.style.backgroundColor = colors[randomColor];
  }
}
