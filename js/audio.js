

function play() {
    var audio = document.getElementById("audio");
    var onOff = document.getElementById("onOff");
    var note = document.getElementById("options");
    if(audio.paused){
        audio.play();
        onOff.innerText = "on";
        note.setAttribute('src','images/music.png');
    }
    else{
        audio.pause();
        onOff.innerText = "off";
        note.setAttribute('src','images/musicoff.png');
    }
    return audio;
}