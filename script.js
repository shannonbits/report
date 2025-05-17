tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: {
    color: { value: "transparent" }
  },
  particles: {
    color: { value: "#a855f7" },
    links: {
      enable: true,
      color: "#a855f7",
      distance: 130,
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,
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
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 }
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
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
});
