function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

}

function play() {
  song.play();
}

function preload() {
    song = loadSound("music-1.mp3");
    song = loadSound("music-2.mp3");
}

