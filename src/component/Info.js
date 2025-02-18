import React from "react";
import bgImage4 from './image/space.jpg';

const Info=()=>{

    return(
        <>
        <div className="container-fuild mt-2 info">
            {/* style="max-width: 540px;" */}
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={bgImage4} className="img-fluid rounded-start m-5" alt="kax" />
                </div>
        <div className="col-md-6 mt-5">
        <div className="card-body text-white  ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text justify-content-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptates velit sunt accusamus laudantium quis voluptas accusantium cupiditate nostrum
                possimus beatae eius, architecto enim sit, doloribus consequuntur. Iste magni voluptas eum perspiciatis, doloremque possimus consectetur ipsum corrupti! 
                Labore minus ipsum vel corrupti, aspernatur ut veritatis fugit voluptas tempore, rerum ex.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptates velit sunt accusamus laudantium quis voluptas accusantium cupiditate nostrum
                possimus beatae eius, architecto enim sit, doloribus consequuntur. Iste magni voluptas eum perspiciatis, doloremque possimus consectetur ipsum corrupti! 
                Labore minus ipsum vel corrupti, aspernatur ut veritatis fugit voluptas tempore, rerum ex.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptates velit sunt accusamus laudantium quis voluptas accusantium cupiditate nostrum
                possimus beatae eius, architecto enim sit, doloribus consequuntur. Iste magni voluptas eum perspiciatis, doloremque possimus consectetur ipsum corrupti! 
                Labore minus ipsum vel corrupti, aspernatur ut veritatis fugit voluptas tempore, rerum ex. 
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
        </div>
        
        </div>
        </>
    );
}
export default Info;