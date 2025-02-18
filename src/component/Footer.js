import React, { Component } from "react";
// import "bootstrap-icons/font/bootstrap-icons.css"

class Footer extends Component{
    render(){
        return(
            <>
            <div className="container-fluid text-light footer bg-dark ">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="display-4 mt-5">Spacia</h2>
                        <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            
                        </p>
                    </div>
                    
                    <div className="col-md-2 mt-5">
                        <h5>Features</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item ">Satellite</li>
                            <li class="list-group-item">Rocket</li>
                            <li class="list-group-item">Spacecraft</li>
                            <li class="list-group-item">Moonwalk</li>
                            <li class="list-group-item">Orbix</li>
                        </ul>
                    </div>
                    <div className="col-md-2 mt-5">
                        <h5>Quick links</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Home</li>
                            <li class="list-group-item">About Us</li>
                            <li class="list-group-item">Contacts</li>
                            <li class="list-group-item">Services</li>
                            <li class="list-group-item">Get Start</li>
                        </ul>

                    </div>
                    <div className="col-md-2 mt-5">
                        <h5 >Services</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">contacts</li>
                            <li class="list-group-item">Travel</li>
                            <li class="list-group-item">Nanohour</li>
                            <li class="list-group-item">Scopilo</li>
                            <li class="list-group-item">Particles</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col md-3">
                    <i class="bi bi-geo-alt"></i> Skyland,P-Tower4531-09,Pune,400002.
                    </div>
                    <div className="col md-3 text-light">
                    <i className="bi bi-envelope"></i> info@spacia.com
                    </div>
                    <div className="col md-3">
                    <i className="bi bi-telephone"></i> +91 12345-67890
                    </div>
                    <div className="col md-3 ">
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center">
                    <p>&copy; 2020 All rights reserved | <i>This website is made by PJ</i></p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Footer;