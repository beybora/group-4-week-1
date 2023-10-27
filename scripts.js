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


    /*   document.querySelector(".burger-menu").addEventListener("click", () => {
        const navBarMobile = document.querySelector(".nav-bar-mobile");
        if (navBarMobile.style.display === "none") {
            navBarMobile.style.display = "block";
      } else {
        navBarMobile.style.display = "none";
    }
      }); */

    /* const navBarMobile = document.querySelector('.nav-bar-mobile');
    document.querySelector('.burger-menu').addEventListener('click', () => {
        navBarMobile.classList.toggle('show');
    }); */
    
      

      


      
// Toggle hamburger menu end //