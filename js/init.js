/****************
* CONFIGURATION *
****************/

/********** RESOURCES **********/

// The musics we will use
var music = [
  {'id': 0, 'url': 'http://madoka.ovh/Ante_up.mp3'},
  {'id': 1, 'url': 'http://azunyan.ovh/fuwa_fuwa_time.mp3'}
];

// The beatmaps corresponding to each music
var beatMap = [
  {'music_id': 0, 'beat': '..x..o..x..o'},
  {'music_id': 1, 'beat': 'x.o.x.o.x.o.x'}
];

// The pictures we will use
var pictures = [
  {'id': 0, 'url': 'http://rominou34.github.io/Tabinou/img/plane1.jpg'},
  {'id': 1, 'url': 'http://rominou34.github.io/img/profile_pic.jpg'}
];

// The colors we will use
var colors = [
  '#457cf7',
  '#da2ec9',
  '#49e03b',
  '#f9a932',
  '#895ef2'
]

/********** VARIABLES **********/

/*
***** RESOURCES ARRAYS *****
*/

/*
* This array contains all the <audio> elements
* ( each one corresponding to a music )
*/
var audio = [];

/*
* This array contains all the <img> elements
* ( each one corresponding to a picture )
*/
var img = [];

/*
***** CONTROL / STATE VARIABLES *****
*/

// This variable respresents the current playing audio
var currentAudio;

/*
* This value represents the interval used for the beats
* Used like this: beat_interval = setInterval(); clearInterval(beat_interval);
*/
var beat_interval;

// The current beatmap played
var currentBeat;

// The current beatmap character position
var beat_pos;

/*
***** DOM ELEMENTS *****
*/

// The div showing the beats
var beatDiv;

// The div showing your waifu ( contained inside visualsDiv )
var waifuDiv;

// The div showing the visuals ( background color )
var visualsDiv;

/*
***** LOADING CONTROL *****
*/

// Represents the number of music files loaded
var musicLoaded = 0;

// Represents the number of image files loaded
var imgLoaded = 0;

var loadingInterval;

// ?
var musicLoading;
var imgLoading;

window.addEventListener('DOMContentLoaded', function() {
  waifuDiv = document.getElementById("waifu");
  beatDiv = document.getElementById("beat");
  visualsDiv = document.getElementById("visuals");

  loadingInterval = setInterval(musicLoading, 100);
});
