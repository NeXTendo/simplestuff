document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const bookBtn = document.getElementById("bookbtn");
    const noBtn = document.getElementById("no-btn"); 
    const clickSound = document.getElementById("clickSound");

    let noButtonTexts = [
        "Are you sure? 😢",
        "Think again! 🤔",
        "Really? 😭",
        "Come on, say yes! 🥺",
        "I'll be so sad... 😞",
        "Don't break my heart 💔",
        "Last chance! 😖",
        "I believe in you! ✨",
        "Okay... I'm giving up. 😔",
        "Yes"
    ];
    let currentTextIndex = 0;

    // Ensure music exists before using it
    if (music) {
        music.volume = 0.5;
        music.play().catch(error => console.log("Autoplay blocked by browser."));
    }

    // Play music
    if (playBtn) {
        playBtn.addEventListener("click", function () {
            if (music) {
                music.muted = false;
                music.play().catch(error => console.log("Autoplay blocked by browser."));
            }
        });
    }

    // Pause music
    if (pauseBtn) {
        pauseBtn.addEventListener("click", function () {
            if (music) music.pause();
        });
    }

    // Book & Save Image Functionality
    if (bookBtn) {
        bookBtn.addEventListener("click", function () {
            const selectedActivities = [];
            document.querySelectorAll("input[name='activity']:checked").forEach((checkbox) => {
                selectedActivities.push(checkbox.value);
            });

            if (selectedActivities.length === 0) {
                alert("Please select at least one activity! 😊");
                return;
            }

            // Create an image preview
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = 500;
            canvas.height = 300;

            // Background
            ctx.fillStyle = "#ffccff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Title
            ctx.fillStyle = "#ff0066";
            ctx.font = "24px Comic Sans MS";
            ctx.fillText("You booked:", 50, 50);

            // Activities
            ctx.font = "20px Comic Sans MS";
            let yPos = 90;
            selectedActivities.forEach((activity) => {
                ctx.fillText(activity, 50, yPos);
                yPos += 40;
            });

            // Save Image
            const link = document.createElement("a");
            link.download = "Booked_Activities.png";
            link.href = canvas.toDataURL("image/png");
            link.click();

            alert("Yay! Your activity is booked! 💖");
        });
    }
});

// ✅ Move functions outside the event listener to make them accessible globally
function changeNoButtonText() {
    const noBtn = document.getElementById("no-btn");
    if (!noBtn) return;

    let noButtonTexts = [
        "Are you sure? 😢",
        "Think again! 🤔",
        "Really? 😭",
        "Come on, say yes! 🥺",
        "I'll be so sad... 😞",
        "Don't break my heart 💔",
        "Last chance! 😖",
        "I believe in you! ✨",
        "I'm giving up. 😔",
        "Yes"
    ];

    if (typeof window.currentTextIndex === "undefined") {
        window.currentTextIndex = 0;
    }

    if (window.currentTextIndex < noButtonTexts.length - 1) {
        noBtn.innerText = noButtonTexts[window.currentTextIndex];
        window.currentTextIndex++;
    } else {
        noBtn.innerText = "Okay... 😔";
        noBtn.disabled = true;
    }
}

function nextPage(page) {
    const clickSound = document.getElementById("clickSound");
    
    if (clickSound) {
        clickSound.currentTime = 0;  // Rewind to start
        clickSound.play().catch(error => console.log("Click sound play failed:", error));
    }

    setTimeout(() => {
        window.location.href = page;
    }, 500);
}
