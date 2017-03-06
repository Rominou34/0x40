
// for(var m in music) {
//   var addAudio = new Audio(music[m].url);
//   addAudio.autoplay=false;
//   /************************/
//   //addAudio.volume = 0.1;
//   /************************/
//   audio.push(addAudio);
// }

for(var b in build_songs) {
  var addAudio = new Audio(build_songs[b].url);
  addAudio.autoplay=false;
  /************************/
  //addAudio.volume = 0.1;
  /************************/
  audio_build.push(addAudio);
}

for(var l in loop_songs) {
  var addAudio = new Audio(loop_songs[l].url);
  addAudio.autoplay=false;
  /************************/
  //addAudio.volume = 0.1;
  /************************/
  audio_loop.push(addAudio);
}

/*function audioLoading() {
  for(var k in audio) {
    console.log(music[k].url+" - Start: "+ audio[k].buffered.end(0));
  }
}

for(var j in audio) {
  audio[j].onprogress = function() {
    if(this.buffered.length > 0 && this.buffered.end(0) >= this.duration-1) {
      console.log(this.src + " has finished loading");
    }
  }
    //audio.src = "http://madoka.ovh/Ante_up.mp3";
    //audio2.play();
}*/

function play(idToPlay, type) {
  if(currentAudio) {
    currentAudio.pause();
  }
  currentMusic = idToPlay;
  currentId = idToPlay;
  // Build
  if(type == 0) {
    currentAudio = audio_build[idToPlay];
    var music_beat = build_songs[idToPlay].beat_length;
  } else {
    currentAudio = audio_loop[idToPlay];
    var music_beat = loop_songs[idToPlay].beat_length;
  }
  //currentAudio = audio[idToPlay];

  currentAudio.currentTime = 0;
  playBeat(idToPlay, 0, music_beat, type);
  currentAudio.play();
}

function build(music_id) {
  currentState = 0;
  play(music_id, 0);
  currentAudio.onended = function() {
    loop(music_id);
  }
}

function loop(idToPlay) {
  currentState = 1;
  play(idToPlay, 1);
  console.log("Looping");
  currentAudio.onended = function() {
     play(idToPlay, 1);
  };
}

function pause() {
  currentAudio.pause();
  clearInterval(beat_interval);
}

function resume() {
  currentAudio.play();
  playBeat(currentId, beat_pos);
}

function changeMusic(music_id) {
  build(music_id);
  playlistPopup.classList.remove("active");
  curSongDiv.innerHTML = music[music_id].name;
}

// Returns the beat char at the current position
function getBeatChar(pos) {
  var beatMapTemp;
  if(currentState == 0) {
    beatMapTemp = build_songs[currentId].beatmap;
  } else {
    beatMapTemp = loop_songs[currentId].beatmap;
  }
  return beatMapTemp.charAt(pos);
}

// Returns the length of the current beatmap being played
function getBeatmapLength() {
  if(currentState == 0) {
    return build_songs[currentId].beatmap.length;
  } else {
    return loop_songs[currentId].beatmap.length;
  }
}

function playBeat(musicId, b_pos, beat_length, type) {
  clearInterval(beat_interval);
  beat_pos = b_pos;
  currentBeat = musicId;
  beat_interval = setInterval(function() {
    displayBeat();
    playBeatAnimation(getBeatChar(beat_pos));
    beat_pos = (beat_pos+1)%getBeatmapLength();
  }, beat_length);
}
