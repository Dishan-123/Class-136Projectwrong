objects = [];
video = "";
status = "";

function setup()
{
    canvas = createCanvas(400,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}

function start()
{
    objectdetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: DETECTING OBJECTS";
    document.getElementById("inpt").value
}

function modelloaded()
{   
    console.log("MODEL HAS BEEN LOADED");
    status = true;
}

function draw()
{
    image (video,0,0,400,300);
}