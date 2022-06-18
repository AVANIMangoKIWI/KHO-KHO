song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY =0;

function preload(){
    song1.loadSound("lenka.mp3");
    //song2.loadSound("dancemonkey.mp3");//
}

function setup() {
     canvas =  createCanvas(300, 300);
     canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded)
poseNet.on('pose' , gotPoses)
}
function modelLoaded(){
    console.log('mango is saying that there is no issue with this app')

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
console.log("leftWristX = " + leftWristX +"leftWristY =" + leftWristY)

        rightWristX = results[0].pose.rightWrist.x
        rightWristy = results[0].pose.rightWrist.y
        console.log("rightWristX = " + rightWristX +"rightWristY =" + rightWristY)
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
}
function play(){
    song1.play()
    //song2.play()//
}
