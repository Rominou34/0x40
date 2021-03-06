for(var p in pictures) {
  var addImg = new Image();
  addImg.src = "assets/pics/" + pictures[p].name + ".png";
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

// function displayBeat() {
//   var beatLeft = beatDiv.querySelector("span:first-child");
//   var beatRight = beatDiv.querySelector("span:last-child");
//   var beatCenter = beatDiv.querySelector(".big-beat");
//
//   // Left
//   var strLeft = "";
//   var beat_max = beatMap[currentBeat].beat.length;
//   for(var i=0; i < 40; i++) {
//     strLeft = beatMap[currentBeat].beat.charAt((i+beat_pos)%beat_max) + strLeft;
//   }
//   beatLeft.innerHTML = strLeft;
//
//   // Right
//   var strRight = "";
//   for(var i=0; i < 40; i++) {
//     strRight += beatMap[currentBeat].beat.charAt((i+beat_pos)%beat_max);
//   }
//   beatRight.innerHTML = strRight;
//
//   if(beatMap[currentBeat].beat.charAt(beat_pos) != '.') {
//     beatCenter.innerHTML = beatMap[currentBeat].beat.charAt(beat_pos);
//   } else {
//     beatCenter.innerHTML = ' ';
//   }
//
// }

function displayBeat() {
  var beatLeft = beatDiv.querySelector("span:first-child");
  var beatRight = beatDiv.querySelector("span:last-child");
  var beatCenter = beatDiv.querySelector(".big-beat");

  var beatText;
  if(currentState == 0) {
    beatText = songs[currentId].build.beatmap;
  } else {
    beatText = songs[currentId].loop.beatmap;
  }
  // Left
  var strLeft = "";
  var beat_max = beatText.length;
  for(var i=0; i < 40; i++) {
    strLeft = beatText.charAt((i+beat_pos)%beat_max) + strLeft;
  }
  beatLeft.innerHTML = strLeft;

  // Right
  var strRight = "";
  for(var i=0; i < 40; i++) {
    strRight += beatText.charAt((i+beat_pos)%beat_max);
  }
  beatRight.innerHTML = strRight;

  if(beatText.charAt(beat_pos) != '.') {
    beatCenter.innerHTML = beatText.charAt(beat_pos);
  } else {
    beatCenter.innerHTML = ' ';
  }

}

function playBeatAnimation(beat_char) {
  // VERTICAL BLUR
  if(beat_char == 'x') {
    changeImg();
    changeColor();
    verBlur();
  }

  // HORIZONTAL BLUR
  if(beat_char == 'o') {
    //waifuDiv.innerHTML = "";
    changeImg();
    changeColor();
    horBlur();
  }

  // NO BLUR
  if(beat_char == '-') {
    changeImg();
    changeColor();
  }

  // COLOR ONLY
  if(beat_char == ':') {
    changeColor();
  }

  // IMAGE ONLY
  if(beat_char == '*') {
    changeImg();
  }

  // VERTICAL BLUR ONLY
  if(beat_char == 'X') {
    verBlur();
  }

  // HORIZONTAL BLUR ONLY
  if(beat_char == 'O') {
    horBlur();
  }

  // BLACKOUT
  if(beat_char == '+') {
    blackout();
  }
}

/*
* ANIMATIONS
*/

// CHANGE IMAGE
function changeImg() {
  var randomImg = currentImg;
  while(randomImg == currentImg) {
    randomImg = Math.round(Math.random()*(img.length-1));
  }
  currentImg = randomImg;
  waifuDiv.style.backgroundImage = "url('"+img[randomImg].src+"')";

  var w = document.querySelector("#waifu-name");
  w.innerHTML = cleanName(pictures[randomImg].name);
}

function cleanName(name) {
  return name.replace(/_/g , " ");
}

// CHANGE COLOR
function changeColor() {
  var randomColor = currentColor;
  while(randomColor == currentColor) {
    randomColor = Math.round(Math.random()*(colors.length-1));
  }
  currentColor = randomColor;
  var h = document.querySelector("html");
  h.style.backgroundColor = colors[randomColor];

  var c = document.querySelector("#color-name");
  c.innerHTML = colors[randomColor].toUpperCase();
}

// HORIZONTAL BLUR
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

// VERTICAL BLUR
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

// BLACKOUT
function blackout() {
  var h = document.querySelector("html");
  h.style.backgroundColor = "#000";
}
