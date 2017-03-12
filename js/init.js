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
* Array containing the info about every song ( url of audio, name, beat_length, beatmap )
*/
var songs = [
  {'id': 0, 'name': 'Madeon - Finale', 'beat_length': 162.89,
    'build': {'url': 'assets/music/build_Finale.mp3', 'beatmap': '.....'},
    'loop': {'url': 'assets/music/loop_Finale.mp3', 'beatmap': 'x..xo...x...o...x..xo...x...o...x..xo...x...o...x..xo...x...oxoox..xo...x...o...x..xo...x...o...x..xo...x...o...x...o...x...oooo'}
  },
  {'id': 1, 'name': 'Vexare - The Clockmaker', 'beat_length': 53.58,
    'build': {'url': 'assets/music/build_TheClockmaker.mp3', 'beatmap': '+...................................................................................................................................'},
    'loop': {'url': 'assets/music/loop_TheClockmaker.mp3', 'beatmap': 'o.......-...+...x...-----...-...o..:..:.o....:..x.......o...-...o...........o...x.....x.....x...o...............+...............o.......----o--.x.......-...-...o..:..:.o....:..x.......o.-.-.-.o...........o...x...............o.......o.......x...............:...:...:...:.+.x...-----...-...o..:..:.o....:..x.......o...-...o...........o...x.....x.....x...o...............+...............o...........----x.....-.-...-...o..:..:.o....:..x.......o.-.-.-.o...........o...x...............o.......o.......x.....x.....-...'}
  },
  {'id': 2, 'name': 'Imagine Dragons - Radioactive', 'beat_length': 219.66,
    'build': null,
    'loop': {'url': 'assets/music/loop_Radioactive.mp3', 'beatmap': 'o...x.o.o...x.o.o...x...o...x.o.o...x.o.o...x.......x.......x...'}
  },
  {'id': 3, 'name': 'Row Row Fight the Powah (RAGEFOXX & SLUTTT MIX)', 'beat_length': 119.01,
    'build': null,
    'loop': {'url': 'assets/music/loop_RowRow.mp3', 'beatmap': 'o...x...o...x...o...x...o...x...o...x...o...x...o...x...o...xxx.x...x...o...x...o...x...o...x...o...x...o...x...o...o...o...o...'}
  },
  {'id': 4, 'name': 'Outlaw Star OST - Desire', 'beat_length': 138.81,
    'build': {'url': 'assets/music/build_Desire.mp3', 'beatmap': 'x.....x.x.x.xxx.'},
    'loop': {'url': 'assets/music/loop_Desire.mp3', 'beatmap': 'o...x...o.o.x.x...o.x...o.o.x...o...x...o.o.x.x...o.x...oo..x.x.o...x...o.o.x.x...o.x...oo..x.x.o...x...o.o.x.x...o.x...x...x.xx'}
  },
  {'id': 5, 'name': 'The Bloody Beetroots - Out of Sight', 'beat_length': 108.61,
    'build': null,
    'loop': {'url': 'assets/music/loop_OutOfSight.mp3', 'beatmap': 'o.....oox.......o.o....ox.......o.....oox...o...o.o....ox.......o......ox.......o.o....ox.......o.....oox...o...o.o.....+.......'}
  },
  {'id': 6, 'name': 'Buckethead - Smile Without a Face', 'beat_length': 106.97,
    'build': {'url': 'assets/music/build_SmileWithoutAFace.mp3', 'beatmap': '..o.....-:x.......o.....-:x.......o.....-:x.......o.....-:x.......o.....-:x.......o.....-:x.x......'},
    'loop': {'url': 'assets/music/loop_SmileWithoutAFace.mp3', 'beatmap': 'o......ox.....o.o.......x.......o......ox.....o.o.....o.x.ooooooo......ox.....o.o.......x.......o......ox.....o.o.....o.x.oooooo'}
  },
  {'id': 7, 'name': 'Crystal Castles - Courtship Dating', 'beat_length': 249.87,
    'build': null,
    'loop': {'url': 'assets/music/loop_CourtshipDate.mp3', 'beatmap': 'o...x.....o.x...o...x.....o.x...o...x.....o.x...o...x.....o.+...'}
  },
  {'id': 8, 'name': 'Aphex Twin - Vordhosbn', 'beat_length': 88.11,
    'build': {'url': 'assets/music/build_Vordhosbn.mp3', 'beatmap': ':...x..------.......-.-----.+...............x..-.-.--.-.-.-.---..'},
    'loop': {'url': 'assets/music/loop_Vordhosbn.mp3', 'beatmap': 'o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-'}
  },
  {'id': 9, 'name': 'Culprate - Orange Sunrise, Sunset', 'beat_length': 129.22,
    'build': null,
    'loop': {'url': 'assets/music/loop_Orange.mp3', 'beatmap': 'o.o.x..o.x.x....o..ox......x....o...x....o.x....o...x....o.xx...o.o.x..o.x.x....o..ox......x....o...x....o.x...xo...x....o.xx...'}
  },
  {'id': 10, 'name': 'Hyper - Spoiler', 'beat_length': 83.38,
    'build': null,
    'loop': {'url': 'assets/music/loop_Spoiler.mp3', 'beatmap': 'o+......x+......o+......x+......o+......x+......o+......x+......o+......x+......o+......x+......o+......x+......o+..............o+......x+......o+......x+......o+......x+......o+......x+......o+......x+......o+......x+......o---------------o+......x.......'}
  }
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
  {'id': 0, 'name': 'Agiri'},
  {'id': 1, 'name': 'Ai'},
  {'id': 2, 'name': 'Akarin'},
  {'id': 3, 'name': 'Akatsuki'},
  {'id': 4, 'name': 'Alice'},
  {'id': 5, 'name': 'Astraea'},
  {'id': 6, 'name': 'Asuha'},
  {'id': 7, 'name': 'Asuka'},
  {'id': 8, 'name': 'Ayase'},
  {'id': 9, 'name': 'CC'},
  {'id': 10, 'name': 'Chika'},
  {'id': 11, 'name': 'Chiri'},
  {'id': 12, 'name': 'Chitanda'},
  {'id': 13, 'name': 'Chiyo'},
  {'id': 14, 'name': 'Cirno'},
  {'id': 15, 'name': 'Crona'},
  {'id': 16, 'name': 'Demon_Sisters'},
  {'id': 17, 'name': 'Emi'},
  {'id': 18, 'name': 'Etna'},
  {'id': 19, 'name': 'Eureka'},
  {'id': 20, 'name': 'Excel'},
  {'id': 21, 'name': 'Faye'},
  {'id': 22, 'name': 'Felli'},
  {'id': 23, 'name': 'Flandre'},
  {'id': 24, 'name': 'Fran'},
  {'id': 25, 'name': 'Fuu'},
  {'id': 26, 'name': 'Galil'},
  {'id': 27, 'name': 'Hajime_Ichinose'},
  {'id': 28, 'name': 'Hakase'},
  {'id': 29, 'name': 'Hanako'},
  {'id': 30, 'name': 'Haruhi'},
  {'id': 31, 'name': 'Haruhi_Fujioka'},
  {'id': 32, 'name': 'Megumi'},
];


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
