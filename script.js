// script.js

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

// Smooth scroll handled by CSS (scroll-behavior: smooth)

// Modal handling
const openSubmit = document.getElementById('open-submit');
const submitButton = document.getElementById('submit-button');
const modal = document.getElementById('submit-modal');
const closeModal = document.getElementById('close-modal');
const form = document.getElementById('submit-form');
const formMessage = document.getElementById('form-message');

function openModal() {
  modal.classList.remove('hidden');
  // Focus first input for accessibility
  document.getElementById('app-name').focus();
}

function closeModalFunc() {
  modal.classList.add('hidden');
  formMessage.textContent = '';
  form.reset();
}

openSubmit.addEventListener('click', openModal);
submitButton.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);

// Close modal on outside click
modal.addEventListener('click', e => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Form submission (fake)
form.addEventListener('submit', e => {
  e.preventDefault();
  formMessage.style.color = '#a855f7';
  formMessage.textContent = 'Submitting...';

  // Simulate async submission delay
  setTimeout(() => {
    formMessage.textContent = 'Thank you! Your app submission has been received.';
    form.reset();
  }, 1500);
});
