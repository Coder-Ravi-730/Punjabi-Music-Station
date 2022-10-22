const music = document.querySelector('audio');
const play = document.getElementById("play");
let isplaying = false;
const playMusic = () =>{
    isplaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
};
const pauseMusic = () =>{
    isplaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
};
play.addEventListener("click",() =>{
    if(isplaying){
        pauseMusic();
    }else{
        playMusic();
    }
});