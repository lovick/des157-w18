var offset = 0;
var background;
var bars = new Map();
var numRows = 10;
var percentChance = 0.1;
var barLength = 200;
var nameSize = 90;

function setup() {
    var bannerCanv = createCanvas(800, 250);
    bannerCanv.parent('mySketch');
    textFont("Ubuntu");
    for (var i = 0; i < numRows; i++) {
        bars.set(i, -999);
    }
}

function draw() {
    background(color('#39a0ed'));

    // Update the bars
    for (var i = 0; i < numRows; i++) {
        if (random(100) < percentChance && bars.get(i) == -999) {
            bars.set(i, 0-barLength);
            console.log("Added bar");
        } else if (bars.get(i) > width+barLength) {
            bars.set(i, -999);
            console.log("Removed bar");
        }
    }

    // Actually draw the bars
    noStroke();
    console.log("Draw Loop");
    for (var i = 0; i < numRows; i++) {
        if (mouseIsPressed) {
            fill('#292F36');
        } else if (i % 2 == 0) {
            fill('#224870');
        } else {
            fill('#4c6085');
        }
        var temp = bars.get(i);
        if (temp != -999) {
            rect(temp, i*(height/numRows), barLength, height/numRows, 20);
            rect(width-i*(width/numRows), temp, height/numRows, barLength, 20);
            console.log("Drawing bar "+i+" at "+temp+" and "+(height/numRows));
            if (mouseIsPressed) {
                bars.set(i, temp+3);
            } else {
                bars.set(i, temp+1);
            }
        }
    }

    textSize(nameSize);
    fill('#f7fff7');
    text('Sven Olson', 50, 3*height/4);
    offset+=1;
}