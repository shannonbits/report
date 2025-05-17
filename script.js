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
