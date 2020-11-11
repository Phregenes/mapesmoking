import React from 'react';
import './style.css';

import Particles from 'react-particles-js';
import ComponentLanding from '../../components/ComponentLanding';

import shape from '../../assents/img/nave.png';



const LandingPage = () => 

<div className="particles">
  
      <Particles 
            params={{
              "particles": {
                "number": {
                  "value": 30,
                  "density": {
                    "enable": true,
                    "value_area": 400
                  }
                },
                "color": {
                  "value": "#070707"
                },
                "shape": {
                  "type": "images",
                  "stroke": {
                    "width": 20,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 40
                  },
                  "images": {
                    "src": shape,
                    "width": 500,
                    "height": 500
                  }
                },
                "opacity": {
                  "value": 1,
                  "anim": {
                    "enable": true,
                    "speed": 4,
                    "opacity_min": 0.4,
                    "sync": false
                  }
                },
                "size": {
                  "value": 30,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 200,
                  "color": "#3D195B",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "right",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 120
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true,
              "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
              }



              // "particles": {
              //   "number": {
              //     "value": 50,
              //     "density": {
              //       "enable": true,
              //       "value_area": 500
              //     }
              //   },
              //   "color": {
              //     "value": "#fff"
              //   },
              //   "opacity": {
              //     "value": 1,
              //     "anim": {
              //       "enable": true,
              //       "speed": 8,
              //       "opacity_min": 0.4,
              //       "sync": false
              //     }
              //   },
              //   "shape": {
              //     "type": "images",
              //     "stroke": {
              //       "width": 20,
              //       "color": "#000000"
              //     },
              //     "polygon": {
              //       "nb_sides": 40
              //     },
              //     "images": {
              //       "src": shape,
              //       "width": 500,
              //       "height": 500
              //     }
              //   },
              //   "size": {
              //     "value": 15,
              //     "random": true
              //   },
              //   "line_linked": {
              //     "enable": false
              //   },
              //   "move": {
              //     "enable": true,
              //     "speed": 3,
              //     "direction": "right",
              //     "straight": true
              //   }
              // },
              // "interactivity": {
              //   "detect_on": "canvas",
              //   "events": {
              //     "onhover": {
              //       "enable": false
              //     },
              //     "onclick": {
              //       "enable": false
              //     }
              //   }
              // }
            


              
            
            }} />
            <div className="componentcenter">
              <ComponentLanding />
            </div>
     
</div>

export default LandingPage;



 