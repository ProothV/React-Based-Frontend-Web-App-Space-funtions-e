import React, { Component } from "react";
import SunImg from './image/sun.png'; // Import the sun image
// import { Button } from '@mui/material';
// import './Home.css';  // Import a separate CSS file for custom styles

class Home extends Component {
  render() {
    return (
      <>
        <div className="container home">
          <div className="row mt-5">
            <div className="col-md-6 text-light">
              <h1 className="display-2 mt-5 text-bold">Orbit the <br /> Earth..</h1>
              <h2 className="display-4 mt-2 text-bold">Explore the Space</h2>
              <p className="mt-3 text-attractive">Here's a small paragraph capturing the experience of exploring space:

"Exploring space is an awe-inspiring journey beyond the boundaries of our planet, where the vastness of the cosmos unfolds before your eyes. 
The silence of the void, punctuated only by the hum of distant stars and the gentle pull of gravity, evokes a sense of wonder and humility. As you
 drift among the planets, the beauty of the universe—its nebulae, galaxies, and the infinite expanse—leaves you speechless. It’s a reminder of how small
  we are in the grand scheme of existence, yet how limitless our curiosity and drive for discovery can be."</p>
              <a href="#linked" className="btn btn-outline-info btn-lg mb-4 mt-5">Get Started</a>
            </div>

            {/* Sun Image */}
            <div className="col-md-6 text-center">
              <img src={SunImg} alt="Sun" className="sun-image bubbling" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
