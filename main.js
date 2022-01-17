var xpoint;
var ypoint;

var xpointhat;
var ypointhat;

function preload() {
    image_clown = loadImage('clownnose-removebg-preview.png');
    image_hat = loadImage('hatbrown-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(image_clown, xpoint, ypoint, 50, 50);
    image(image_hat, xpointhat, ypointhat, 270, 250);
}

function gotPoses(result) {
    if(result.length > 0) {
        console.log(result);
        console.log(result[0].pose.nose.x);
        console.log(result[0].pose.nose.y);
        xpoint = result[0].pose.nose.x - 25;
        ypoint = result[0].pose.nose.y - 25;
        xpointhat = result[0].pose.nose.x - 130;
        ypointhat = result[0].pose.nose.y - 210;
    }
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log("Model Loaded!");
}