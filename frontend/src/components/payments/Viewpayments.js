import React from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";

const Viewpayments = () => {
  return (
    <div className="d-flex ">
      <div className="col-2 bg-light p-0">
      <Menu/>
      </div>
      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to='/dashboardPage' className="text-decoration-none"><i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;</Link>&gt; Payments &gt; View Payments
        </nav>
        <h4 className="mt-2 ms-2 text-primary">View Payments</h4>
        <hr className="ms-4 me-4" />
       
       
        <hr></hr>
        <footer className="page-footer font-small bg-blue m-4">
          <div className="footer-copyright text-center">
            <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
            Copyrights © 2023
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Viewpayments;
