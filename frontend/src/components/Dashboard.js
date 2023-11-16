import React,{useState,useEffect} from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import axios from "axios";

function DashboardPage() {
  const [doctors, setDoctors] = useState();
  const [patient, setPatient] = useState();
  const [appointment, setAppointment] = useState();
  const [lab, setLab] = useState();




  useEffect(() => {
    axios.get('http://localhost:8080/dashboardPage')
      .then((data) =>{ 
        console.log(data.data)
      setDoctors(data.data.table1[0].ROWCOUNT)
      setPatient(data.data.table2[0].ROWCOUNT)
      setLab(data.data.table3[0].ROWCOUNT)
      setAppointment(data.data.table3[0].ROWCOUNT)


      // setData(data)
  })

      .catch((error) => console.error('Fetch error: ' + error));
  }, []);



  return (
    <div className="d-flex">
      <div className="col-2 bg-light p-0">
        <Menu/>
      </div>

      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to='/dashboardPage' className="text-decoration-none"><i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;</Link>&gt; Dashboard
        </nav>
        {/* dashboard */}
        <h4 className="mt-2 ms-2 text-primary">Dashboard</h4>
        <hr></hr>
        <div className="right-panel d-flex flex-wrap justify-content-center mb-5">
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">
                         {doctors}
                </h1>
              </div>
              <div className="card-footer" style={{ background: "#5ab5cf" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="fa fa-user-md"></i>&nbsp;Doctors
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">{patient}</h1>
              </div>
              <div className="card-footer" style={{ background: "#95c077" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="fa fa-user"></i>&nbsp;Patients
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">{lab}</h1>
              </div>
              <div
                className="card-footer p-2"
                style={{ background: "#f1cf42" }}
              >
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="fa fa-flask"></i>&nbsp;Labs
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">{appointment}</h1>
              </div>
              <div className="card-footer" style={{ background: "#cd706c" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="fa fa-calendar"></i>&nbsp;Appointments
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">0</h1>
              </div>
              <div className="card-footer" style={{ background: "#3ac2ad" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="bi bi-pencil-square"></i>&nbsp;Re-Sechedule
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">2</h1>
              </div>
              <div className="card-footer" style={{ background: "#B73766" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="bi bi-x"></i>&nbsp;Cancelled
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">0</h1>
              </div>
              <div className="card-footer" style={{ background: "#6480b2" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="bi bi-cash"></i>&nbsp;Payments
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">0</h1>
              </div>
              <div className="card-footer" style={{ background: "#95c077" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="bi bi-pencil-square"></i>&nbsp;Invoice
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <footer className="page-footer font-small bg-blue m-4">
            <div className="footer-copyright text-center">
                <span className='text-primary fs-6'>PrevMed Sol&nbsp;</span>Copyrights © 2023
            </div>
        </footer>
      </div>
      {/* dashboard ends */}
    </div>
  );
}

export default DashboardPage;