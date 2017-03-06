/****************
* CONFIGURATION *
****************/

/********** RESOURCES **********/

// The musics we will use
/*
*    /!\ DEPRECATED
*/
var music = [
  /*{'id': 0, 'url': 'http://madoka.ovh/Ante_up.mp3'},
  {'id': 1, 'url': 'http://azunyan.ovh/fuwa_fuwa_time.mp3'},*/
  {'id': 0, 'url': 'assets/music/Fukkireta.mp3', 'name': 'Ron - Fukkireta', 'beat_length': 60},
  {'id': 1, 'url': 'assets/music/NOMA_BP.mp3', 'name': 'NOMA - Brain Power', 'beat_length': 60},
  {'id': 2, 'url': 'assets/music/build_TheClockmaker.mp3', 'name': 'The clockmaker', 'beat_length': 60},
];

/*
* Array containing the info about every build ( url of audio, name, beat_length, beatmap )
*/
var build_songs = [
  {'id': 0, 'url': 'assets/music/build_Finale.mp3', 'name': 'Madeon - Finale', 'beat_length': 162.89, 'beatmap': '.....'},
  {'id': 1, 'url': 'assets/music/build_Vordhosbn.mp3', 'name': 'Aphex Twin - Vordhosbn', 'beat_length': 88.11, 'beatmap': ':...x..------.......-.-----.+...............x..-.-.--.-.-.-.---..'},
  {'id': 2, 'url': 'assets/music/build_TheClockmaker.mp3', 'name': 'The clockmaker build', 'beat_length': 53.58, 'beatmap': '+...................................................................................................................................'}
];

/*
* Array containing the info about every loop ( url of audio, name, beat_length, beatmap )
*/
var loop_songs = [
  {'id': 0, 'url': 'assets/music/loop_Finale.mp3', 'name': 'Madeon - Finale', 'beat_length': 162.89, 'beatmap': 'x..xo...x...o...x..xo...x...o...x..xo...x...o...x..xo...x...oxoox..xo...x...o...x..xo...x...o...x..xo...x...o...x...o...x...oooo'},
  {'id': 1, 'url': 'assets/music/loop_Vordhosbn.mp3', 'name': 'Aphex Twin - Vordhosbn', 'beat_length': 88.11, 'beatmap': 'o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-'},
  {'id': 2, 'url': 'assets/music/loop_TheClockmaker.mp3', 'name': 'The clockmaker loop', 'beat_length': 53.58, 'beatmap': 'o.......-...+...x...-----...-...o..:..:.o....:..x.......o...-...o...........o...x.....x.....x...o...............+...............o.......----o--.x.......-...-...o..:..:.o....:..x.......o.-.-.-.o...........o...x...............o.......o.......x...............:...:...:...:.+.x...-----...-...o..:..:.o....:..x.......o...-...o...........o...x.....x.....x...o...............+...............o...........----x.....-.-...-...o..:..:.o....:..x.......o.-.-.-.o...........o...x...............o.......o.......x.....x.....-...'}
];

/*
*    /!\ DEPRECATED
*/
var beatMap = [
  {'music_id': 0, 'beat': 'x.o.+...x.*.:.O.'},
  {'music_id': 1, 'beat': 'x.o.x.o.x.o.x.o.'},
  {'music_id': 2, 'beat': '+...................................................................................................................................'},
  {'music_id': 3, 'beat': 'o.......-...+...x...-----...-...o..:..:.o....:..x.......o...-...o...........o...x.....x.....x...o...............+...............o.......----o--.x.......-...-...o..:..:.o....:..x.......o.-.-.-.o...........o...x...............o.......o.......x...............:...:...:...:.+.x...-----...-...o..:..:.o....:..x.......o...-...o...........o...x.....x.....x...o...............+...............o...........----x.....-.-...-...o..:..:.o....:..x.......o.-.-.-.o...........o...x...............o.......o.......x.....x.....-...'}
];

// The pictures we will use
var pictures = [
  /*{'id': 0, 'url': 'http://rominou34.github.io/Tabinou/img/plane1.jpg'},
  {'id': 1, 'url': 'http://rominou34.github.io/img/profile_pic.jpg'}*/
  {'id': 0, 'url': 'assets/pics/Agiri.png'},
  {'id': 1, 'url': 'assets/pics/Ai.png'},
  {'id': 2, 'url': 'assets/pics/Akarin.png'},
  {'id': 3, 'url': 'assets/pics/Akatsuki.png'},
  {'id': 4, 'url': 'assets/pics/Alice.png'},
  {'id': 5, 'url': 'assets/pics/Astraea.png'},
  {'id': 6, 'url': 'assets/pics/Asuha.png'},
  {'id': 7, 'url': 'assets/pics/Asuka.png'},
  {'id': 8, 'url': 'assets/pics/Ayase.png'},
  {'id': 9, 'url': 'assets/pics/CC.png'},
  {'id': 10, 'url': 'assets/pics/Chika.png'},
  {'id': 11, 'url': 'assets/pics/Chiri.png'},
  {'id': 12, 'url': 'assets/pics/Chitanda.png'},
  {'id': 13, 'url': 'assets/pics/Chiyo.png'},
  {'id': 14, 'url': 'assets/pics/Cirno.png'},
  {'id': 15, 'url': 'assets/pics/Megumi.png'},
];

// The pictures we will use
var waifuNames = ['Agiri','Ai','Akarin','Akatsuki','Alice','Astraea','Asuha',
'Asuka','Ayase','CC','Chika','Chiri','Chitanda','Chiyo','Cirno','Megumi'];

// The colors we will use
var colors = [
  'Aqua',
  'Chartreuse',
  'DarkOrchid',
  'DarkOrange',
  'DeepPink',
  'Gold',
  'GreenYellow',
  'MediumSpringGreen',
]

/********** VARIABLES **********/

/*
***** RESOURCES ARRAYS *****
*/

/*
* This array contains all the <audio> elements
* ( each one corresponding to a music )
*/

// /!\ DEPRECATED
var audio = [];

var audio_build = [];
var audio_loop = [];

var currentState; // 0 if build, 1 if loop

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

// Contains the id of the current music
var currentId;

/*
* This value represents the interval used for the beats
* Used like this: beat_interval = setInterval(); clearInterval(beat_interval);
*/
var beat_interval;

// The current beatmap played
var currentBeat;

var currentImg = -1;
var currentColor = -1;
var currentMusic = -1;

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

// CONTROLS
var volSlider;
var playButton;
var isPaused;

// Displaying the menu to change the music
var playlistPopup;
var curSongDiv;

window.addEventListener('DOMContentLoaded', function() {
  waifuDiv = document.getElementById("waifu");
  beatDiv = document.getElementById("beat");
  visualsDiv = document.getElementById("visuals");

  playlistPopup = document.querySelector("#playlist-popup");
  curSongDiv = document.querySelector("#current-song");

  loadingInterval = setInterval(musicLoading, 100);

  // Adding an event listener to the slider
  volSlider = document.querySelector("#vol-slider");
  volSlider.addEventListener("mousemove", function() {
    currentAudio.volume = volSlider.value;
    console.log(volSlider.value);
  });

  // Adding an event listener on the div of the current song to toggle the popup
  curSongDiv.addEventListener("click", function() {
    playlistPopup.classList.toggle("active");
  });

  isPaused = false;

  // Adding an event listener to the play / pause button
  playButton = document.querySelector("#play-button");
  playButton.addEventListener("click", function() {
    if(isPaused) {
      playButton.classList = "fa fa-pause";
      resume();
      isPaused = false;
    } else {
      playButton.classList = "fa fa-play";
      pause();
      isPaused = true;
    }
  })
});
