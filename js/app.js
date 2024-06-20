document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector("body").classList.add("loaded");
  }, 500)
});


document.getElementById('download-resume').addEventListener('click', function(){
  const resumePath = '../assets/pdf/resume.pdf';

  const link = document.createElement('a');
  link.href = resumePath;
  link.download = 'assets/pdf/resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


document.addEventListener("DOMContentLoaded", function() {
  const skillLevels = document.querySelectorAll('.skill-level');
  skillLevels.forEach(skill => {
      const percentage = skill.getAttribute('data-skill');
      skill.style.width = percentage;
      animatePercentage(skill, parseInt(percentage));
  });
});

function animatePercentage(element, targetPercentage) {
  let currentPercentage = 0;
  const interval = setInterval(() => {
      if (currentPercentage >= targetPercentage) {
          clearInterval(interval);
      } else {
          currentPercentage++;
          element.textContent = currentPercentage + '%';
      }
  }, 20); 
}

const scrollUpButton = document.getElementById('scroll-up');

    // Show the scroll-up button when scrolled down 100px
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    };

    // Smooth scroll to top
    scrollUpButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

