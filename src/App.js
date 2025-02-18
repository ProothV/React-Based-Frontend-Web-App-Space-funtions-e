import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar1 from './component/Navbar';
import Home from './component/Home';
import bgImage from './video/spacevd.mp4'
import About from './component/About';
import Feature from './component/Card';
import Info from './component/Info';
import Footer from './component/Foot';
import Pop from './component/Props';
import SatelliteWork from './component/Work';
import TeamSection from './component/Team';
import EventsNotifications from './component/EveNot';
import GalaxyPoint from './component/Galaxy';
import RocketrySection from './component/Rocket';
import BookList from './component/Api';
import Navbar2 from './component/Api';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>
     {/* <h1>Proo</h1> */}
     <Navbar1></Navbar1>
     <Home></Home>
     <About></About>
     <SatelliteWork></SatelliteWork>
     <TeamSection></TeamSection>
     <EventsNotifications></EventsNotifications>
     <GalaxyPoint></GalaxyPoint>
     <RocketrySection></RocketrySection>
     
     {/* <Feature></Feature>
     <Info></Info> */}
     <Footer></Footer>
     {/* <BookList/> */}
     <Navbar2/>
     {/* <Pop nick="Joe" ></Pop>
     <Pop>
     <button type="button" className="btn btn-primary">Login</button>
     </Pop>
     <Pop nick="Thomas" ></Pop>
     <Pop nick="Raghav" ></Pop>
     <Pop nick="Bharat" ></Pop>
     <Pop nick="Durga" ></Pop> */}

    </div>
  );
}

export default App;
