document.getElementById('watch-story__play-button-2').addEventListener('click', function() {
    const video = document.getElementById('video');
    video.style.display = 'block';  // Set the display property to 'block'
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
            if (video.paused) {
                video.style.display = 'none';
            }
});

document.getElementById('video').addEventListener('click', function() {
    const video = document.getElementById('video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    if (video.paused) {
        video.style.display = 'none';
    }
});
