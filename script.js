// Existing tsParticles init
tsParticles.load("tsparticles", {
  background: {
    color: "#0b0b14"
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 70
    },
    color: {
      value: "#a855f7"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3
    },
    size: {
      value: { min: 1, max: 3 }
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      outModes: {
        default: "bounce"
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 0.4
      }
    }
  },
  detectRetina: true
});

// Active Sidebar Link Highlighting & Scroll Progress Bar
const sections = document.querySelectorAll('.section');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const scrollProgress = document.getElementById('scroll-progress');
const snapContainer = document.querySelector('.snap-container');

snapContainer.addEventListener('scroll', () => {
  const scrollTop = snapContainer.scrollTop;
  const scrollHeight = snapContainer.scrollHeight - snapContainer.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';

  // Find active section
  let currentSectionId = '';
  sections.forEach(section => {
    const offsetTop = section.offsetTop;
    if(scrollTop >= offsetTop - 100) {
      currentSectionId = section.id;
    }
  });

  sidebarLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentSectionId);
  });

  // Show/hide scroll to top button
  if(scrollTop > 200) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top-btn');
scrollTopBtn.addEventListener('click', () => {
  snapContainer.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animated Scroll Cue - hide after scroll
const scrollCue = document.getElementById('scroll-cue');
snapContainer.addEventListener('scroll', () => {
  if(snapContainer.scrollTop > 50) {
    scrollCue.style.opacity = '0';
  } else {
    scrollCue.style.opacity = '1';
  }
});

// Submit Modal Popup
const submitLink = document.getElementById('submit-link');
const submitModal = document.getElementById('submit-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const submitForm = document.getElementById('submit-form');

submitLink.addEventListener('click', (e) => {
  e.preventDefault();
  submitModal.hidden = false;
  submitModal.focus();
});

modalCloseBtn.addEventListener('click', () => {
  submitModal.hidden = true;
});

submitModal.addEventListener('click', (e) => {
  if(e.target === submitModal) {
    submitModal.hidden = true;
  }
});

// Simple form submission (demo)
submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(`Thanks for submitting "${submitForm['app-name'].value}"!`);
  submitModal.hidden = true;
  submitForm.reset();
});
