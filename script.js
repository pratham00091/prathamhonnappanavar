particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, 
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "size": {
            "value": 5,  
            "random": true 
        },
        "color": {
            "value": "#676767"   
        },
        "opacity": {
            "value": 0.8,  
            "random": false
        },
        "line_linked": {
            "enable": true,  
            "distance": 100,  
           "color": "#808080",  
            "opacity": 0.5,  
            "width": 3  
        },
        "move": {
            "enable": true,
            "speed": 5,  
            "direction": "none",  
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse", 
                "distance": 150,  
                "duration": 0.4 
            },
            "onclick": {
                "enable": true,
                "mode": "push",  
                "particles_nb": 10  
            }
        }
    },
    "retina_detect": true
});

//mobile friendly
function toggleMenu() {
    const menu = document.querySelector('.tt');
    menu.classList.toggle('active'); // Toggle the active class to show/hide the menu
  }

  /*
  // Disable right-click (context menu) but allow clicking elements
document.addEventListener('contextmenu', function (e) {
    // Check if the right-click is on a specific element, such as a button or link
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
      e.preventDefault();
    }
  }, false);
  
  // Disable F12, Ctrl+Shift+I (Developer Tools shortcuts)
  document.onkeydown = function (e) {
    if (e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode == 85) // Ctrl+U
    ) {
      e.preventDefault();
      return false;
    }
  };
  
  // Disable DevTools detection (monitoring changes to window, console, or devtools)
  (function() {
    var devtools = { 
      open: false, 
      orientation: undefined 
    };
  
    Object.defineProperty(devtools, 'open', {
      get: function() {
        return this._open;
      },
      set: function(value) {
        this._open = value;
        if (value) {
          alert("Developer Tools are open!"); // Alert when devtools are opened
        }
      }
    });
  
    setInterval(function() {
      devtools.open = window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100;
    }, 500);
  
    window.addEventListener('resize', function() {
      devtools.orientation = window.orientation;
    });
  })();*/

  