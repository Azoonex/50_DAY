var sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach(function (sound) {
    var btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener("click", function () {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.getElementById("buttons").appendChild(btn);
});
function stopSongs() {
    sounds.forEach(function (sound) {
        var song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
var h2Element = document.querySelector(".h2_element");
h2Element.innerHTML = 'amirAbas Tanke you';
