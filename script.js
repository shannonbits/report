// script.js
tsParticles.load("tsparticles", {
  background: {
    color: "#0b0b14"
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 60,
    },
    color: {
      value: "#a855f7"
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: { min: 1, max: 4 },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "bounce",
      },
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      }
    }
  },
  detectRetina: true,
});
