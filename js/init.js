var music = [
  {'id': 0, 'url': 'http://madoka.ovh/Ante_up.mp3'},
  {'id': 1, 'url': 'http://azunyan.ovh/fuwa_fuwa_time.mp3'}
];

var beatMap = [
  {'music_id': 0, 'beat': '--x--o--x--o'},
  {'music_id': 1, 'beat': 'x-o-x-o-x-o-x'}
];

var pictures = [
  {'id': 0, 'url': 'http://rominou34.github.io/Tabinou/img/plane1.jpg'},
  {'id': 1, 'url': 'http://rominou34.github.io/img/profile_pic.jpg'}
];

var colors = [
  '#457cf7',
  '#da2ec9',
  '#49e03b',
  '#f9a932',
  '#895ef2'
]

var audio = [];
var img = [];
var currentAudio, beat_interval, currentBeat, beat_pos;
var beatDiv, imgDiv, visualsDiv;

var musicLoaded = 0;
var imgLoaded = 0;

var musicLoading, imgLoading;
