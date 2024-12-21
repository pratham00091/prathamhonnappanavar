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


function toggleMenu() {
    const menu = document.querySelector('.tt');
    menu.classList.toggle('active'); // Toggle the active class to show/hide the menu
  }
  