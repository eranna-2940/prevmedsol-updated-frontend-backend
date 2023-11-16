import React from "react";
import engageplan from "../images/engageplan.webp";
import empowerplan from "../images/empowerplan.webp";
import enhanceplan from "../images/enhanceplan.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <img src={medicalbg} alt="medial bg" width="100%" height="550px" className="opacity-75"/> */}
      <div className="homemain">
        <div className="p-5">
        <h1 className="text-white fw-bolder" style={{fontSize:"60px",textShadow:"2px 3px 2px black"}}>Engage<br/>Empower<br/>Enhance</h1>
        <div className="mt-5 text-white w-50">
                <h4>Because those who made us deserve to age magnificently from the comfort of their own homes.</h4>
        </div>
        <div className="text-center  rounded-pill d-flex justify-content-center align-items-center" 
        style={{height:"220px" , marginTop:"120px",backgroundColor:"#E0DBDB"}}>
            <div className="col-3"><h3 className="fs-2 fw-bold">30000<sup>+</sup></h3><h5>Elders Empowered</h5></div>
            <div className="col-3"><h3 className="fs-2 fw-bold">PAN India</h3><h5>Operated</h5></div>
            <div className="col-3"><h3 className="fs-2 fw-bold">500<sup>+</sup></h3><h5>Lives Saved</h5></div>
            <div className="col-3"><h3 className="fs-2 fw-bold">2000<sup>+</sup></h3><h5>Events Organised</h5></div>
        </div>
        </div>
      </div>
      <div className="m-5 p-5">
            <div className="d-flex justify-content-between mt-5 mb-3">
            <h3>Get the care plan your parents need</h3>
            <h6>We have all their needs covered.</h6>
            </div>
            <div className="d-flex justify-content-between plansdiv mb-4">
                <div className="m-3 position-relative">
                    <img src={engageplan} alt="engage pic"/>
                    <h3 style={{bottom:"20%", left:"100px"}} className="position-absolute text-white fw-bold">Engage Plan</h3>
                    <Link to='/plans'><button style={{bottom:"10%", left:"140px"}} className="btn btn-primary position-absolute">Learn More</button></Link>
                </div>
                <div className="m-3 position-relative">
                <img src={empowerplan} alt="empower pic"/>
                <h3 style={{bottom:"20%", left:"100px"}} className="position-absolute text-white fw-bold">Empower Plan</h3>
                <Link to='/plans'><button style={{bottom:"10%", left:"140px"}} className="btn btn-primary position-absolute">Learn More</button></Link>
                </div>
                <div className="m-3 position-relative">
                <img src={enhanceplan} alt="enhance pic"/>
                <h3 style={{bottom:"20%", left:"100px"}} className="position-absolute text-white fw-bold">Enhance Plan</h3>
                <Link to='/plans'><button style={{bottom:"10%", left:"140px"}} className="btn btn-primary position-absolute">Learn More</button></Link>
                </div>
            </div>
        </div>
    </>
  );
};

export default Home;
