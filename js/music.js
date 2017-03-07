// for(var b in build_songs) {
//   var addAudio = new Audio(build_songs[b].url);
//   addAudio.autoplay=false;
//   /************************/
//   //addAudio.volume = 0.1;
//   /************************/
//   audio_build.push(addAudio);
// }
//
// for(var l in loop_songs) {
//   var addAudio = new Audio(loop_songs[l].url);
//   addAudio.autoplay=false;
//   /************************/
//   //addAudio.volume = 0.1;
//   /************************/
//   audio_loop.push(addAudio);
// }

for(var a in songs) {
  console.log(songs[a]);
  if(songs[a].build != null) {
    var addAudio = {'song_id': songs[a].id, 'audio': new Audio(songs[a].build.url)};
    addAudio.autoplay=false;
    audio_build.push(addAudio);
  }
  var addLoop = {'song_id': songs[a].id, 'audio': new Audio(songs[a].loop.url)};
  addLoop.autoplay=false;
  audio_loop.push(addLoop);
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

  currentAudio = getAudio(idToPlay, type);
  var music_beat = songs[idToPlay].beat_length;
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

// Returns the audio element given the id of the song and the type ( build or loop )
function getAudio(song_id, type) {
  if(type == 0) {
    var audio_list = audio_build;
  } else {
    var audio_list = audio_loop;
  }
  for(var a in audio_list) {
    if(audio_list[a].song_id == song_id) {
      return audio_list[a].audio;
    }
  }
}

function changeMusic(music_id) {
  // If the song has a build we play the build first
  if(songs[music_id].build != null) {
    build(music_id);
  } else {
    // Else we directly loop
    loop(music_id);
  }

  playlistPopup.classList.remove("active");
  curSongDiv.innerHTML = songs[music_id].name;
}

// Returns the beat char at the current position
function getBeatChar(pos) {
  var beatMapTemp;
  if(currentState == 0) {
    beatMapTemp = songs[currentId].build.beatmap;
  } else {
    beatMapTemp = songs[currentId].loop.beatmap;
  }
  return beatMapTemp.charAt(pos);
}

// Returns the length of the current beatmap being played
function getBeatmapLength() {
  if(currentState == 0) {
    return songs[currentId].build.beatmap.length;
  } else {
    return songs[currentId].loop.beatmap.length;
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
