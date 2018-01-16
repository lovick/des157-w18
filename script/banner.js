var offset = 0;
var background;
var numBars = 8;

function setup() {
    var bannerCanv = createCanvas(800, 250);
    bannerCanv.parent('mySketch');
}

function draw() {
    background(color('#39a0ed'));
    for (var i = 0; i < 8; i++) {
        rect((i*(width/numBars)+offset)%(width+(width/numBars))-100, i*(height/numBars), width/numBars, height/numBars);
    }
    offset+=1;
}