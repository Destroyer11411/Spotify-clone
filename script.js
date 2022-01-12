console.log("Welcome to spotify!");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "State of Grace",filePath: "songs/1.mp3", coverPath: "cover/1.jpg" }
]


// audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})



// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

})