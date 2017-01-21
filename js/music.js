
for(var m in music) {
  var addAudio = new Audio(music[m].url);
  addAudio.autoplay=false;
  /************************/
  //addAudio.volume = 0.1;
  /************************/
  audio.push(addAudio);
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

function play(idToPlay) {
  if(currentMusic != idToPlay) {
    if(currentAudio) {
      currentAudio.pause();
    }
    currentMusic = idToPlay;
    currentId = idToPlay;
    currentAudio = audio[idToPlay];
    currentAudio.currentTime = 0;
    playBeat(idToPlay, 0);
    currentAudio.play();
  }
}

function pause() {
  currentAudio.pause();
  clearInterval(beat_interval);
}

function resume() {
  currentAudio.play();
  playBeat(currentId, beat_pos);
}

function playBeat(musicId, b_pos) {
  clearInterval(beat_interval);
  beat_pos = b_pos;
  currentBeat = musicId;
  beat_interval = setInterval(function() {
    displayBeat();
    playBeatAnimation(beatMap[currentBeat].beat.charAt(beat_pos));
    beat_pos = (beat_pos+1)%beatMap[currentBeat].beat.length;
  }, 200);
}
