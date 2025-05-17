tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: {
    color: { value: "transparent" }
  },
  fpsLimit: 60,
  particles: {
    color: { value: "#a855f7" },
    links: {
      enable: true,
      color: "#a855f7",
      distance: 120,
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: "bounce"
    },
    number: {
      value: 60,
      density: {
        enable: true,
        area: 800
      }
    },
    opacity: {
      value: 0.4
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 4 }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  detectRetina: true
});
