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
    //waifuDiv.innerHTML = "";
    changeImg();
    changeColor();
    horBlur();
  }
  if(beat_char == 'o') {
    changeImg();
    changeColor();
    verBlur();
  }
}

/*
* ANIMATIONS
*/

function changeImg() {
  var randomImg = currentImg;
  while(randomImg == currentImg) {
    randomImg = Math.round(Math.random()*(img.length-1));
  }
  currentImg = randomImg;
  waifuDiv.style.backgroundImage = "url('"+img[randomImg].src+"')";
}

function changeColor() {
  var randomColor = currentColor;
  while(randomColor == currentColor) {
    randomColor = Math.round(Math.random()*(colors.length-1));
  }
  currentColor = randomColor;
  var h = document.querySelector("html");
  h.style.backgroundColor = colors[randomColor];
}

function horBlur() {
  var dice = Math.random() > 0.5;
  var anim;
  if(dice) {
    anim = 'anim-blur-left';
  } else {
    anim = 'anim-blur-right';
  }
  waifu.classList.add(anim);
  setTimeout(function() {
    waifu.classList.remove(anim);
  }, 200);
}

function verBlur() {
  var dice = Math.random() > 0.5;
  var anim;
  if(dice) {
    anim = 'anim-blur-top';
  } else {
    anim = 'anim-blur-bottom';
  }
  waifu.classList.add(anim);
  setTimeout(function() {
    waifu.classList.remove(anim);
  }, 200);
}
