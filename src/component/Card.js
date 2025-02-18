import React from "react";
import bgImage1 from './image/gal.gif';
import bgImage2 from './image/rock.gif';
import bgImage3 from './image/earth.gif';

function Feature(){
    return(
        <>
        <div className="container-fluid mt-2 coloumn ">
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{width: "23rem"}}>
                        <img src={bgImage1} alt="" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 >Leo</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est tempore sapiente tempora asperiores consequuntur cupiditate veritatis, libero odio quibusdam perferendis neque eligendi iusto perspiciatis, reprehenderit nemo.Eligendi iste provident ratione!</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{width: "23rem"}}>
                        <img src={bgImage2} alt="" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Leo</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est tempore sapiente tempora asperiores consequuntur cupiditate veritatis, libero odio quibusdam perferendis neque eligendi iusto perspiciatis, reprehenderit nemo.Eligendi iste provident ratione!</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{width: "23rem"}}>
                        <img src={bgImage3} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Leo</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est tempore sapiente tempora asperiores consequuntur cupiditate veritatis, libero odio quibusdam perferendis neque eligendi iusto perspiciatis, reprehenderit nemo.Eligendi iste provident ratione!</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Feature ;