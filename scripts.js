// Play video script //
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

// Play video script end //

// Toggle hamburger menu //

const checkboxElement = document.getElementById('checkbox');
      const upButton = document.querySelector('.up');
      const toggleLabel = document.querySelector('.toggle');
      checkboxElement.addEventListener('click', () => {
        toggleLabel.toggle('show-dropdown');
      });
      upButton.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });

// Toggle hamburger menu end //