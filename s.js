console.log("welcome to spotify");

// Initializing the variables
let songIndex = 0;
let audioElement = new Audio('s/1.mp3.mp3'); // Fixed file path
let masterPlay = document.getElementById('masterPlay');
let myprogress = document.getElementById('myprogress');
let gif = document.getElementById('gif');
let gif1 = document.getElementById('gif1');
let masterSong = document.getElementById('masterSong');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "chle ana", filePath: "s/1.mp3.mp3", coverPath: "image/1.jpg" },
    { songName: "Sun re", filePath: "s/music.mp3.mp3", coverPath: "image/2.jpg" },
    { songName: "For Aisha", filePath: "s/for_Aisha.mp3.mp3", coverPath: "image/3.jpg" },
    { songName: "Phir Kabhi", filePath: "s/phir-kabhi.mp3.mp3", coverPath: "image/4.jpg" },
    { songName: "Rabba mehr kari", filePath: "s/Rabba_mehr_kari.mp3.mp3", coverPath: "image/5.jpg" },
    { songName: "Itna na mujse", filePath: "s/itna.mp3.mp3", coverPath: "image/60.jpg" },
    { songName: "Itni si baat", filePath: "s/itni_si_baat.mp3.mp3", coverPath: "image/7.jpg" }
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        gif1.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        gif1.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogress.value = progress;
});

myprogress.addEventListener('change', () => {
    audioElement.currentTime = myprogress.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath; // Fixed audio file path
        masterSong.innerText = songs[songIndex].songName;
        h2class.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        gif1.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath; // Fixed audio file path
    masterSong.innerText = songs[songIndex].songName;
    h2class.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath; // Fixed audio file path
    masterSong.innerText = songs[songIndex].songName;
    h2class.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
