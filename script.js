function moveButton() {
    let button = document.getElementById("no-btn");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function nextPage(page) {
    document.getElementById("clickSound").play();
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");

    // Play music automatically when the page loads
    music.volume = 0.5; // Set volume (0.0 to 1.0)
    music.play().catch(error => console.log("Autoplay blocked by browser."));

    // Play button
    playBtn.addEventListener("click", function () {
        music.play();
    });

    // Pause button
    pauseBtn.addEventListener("click", function () {
        music.pause();
    });
    // Unmute the audio after user clicks
document.getElementById('play-btn').addEventListener('click', function() {
    const music = document.getElementById("background-music");
    music.muted = false;
    music.play().catch(error => console.log("Autoplay blocked by browser."));
});

});
