var offset = 0;
var background;
var numBars = 8;

function setup() {
    var bannerCanv = createCanvas(800, 250);
    bannerCanv.parent('mySketch');
    textFont("Ubuntu");
}

function draw() {
    background(color('#39a0ed'));
    for (var i = 0; i < 8; i++) {
        noStroke();
        if (i % 2 == 0) {
            fill('#224870');
        } else {
            fill('#4c6085');
        }
        rect((i*(width/numBars)+offset)%(width+(width/numBars))-100, i*(height/numBars), width/numBars, height/numBars);
    }
    textSize(70);
    fill('#f7fff7');
    text('Sven Olson', 50, 3*height/4);
    offset+=1;
}