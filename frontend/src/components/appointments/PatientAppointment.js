import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Patientappointment = () => {
  const [info1, setInfo1] = useState([]);
  const [info2, setInfo2] = useState([]);

  let date = new Date().toLocaleDateString('sv');
  console.log(typeof(date));

  useEffect(() => {
    axios
      .get("http://localhost:8080/patientappointment")
      .then((res) => {
        // console.log(res.data);
        res.data.data2.map((item1) => {
          res.data.data1.map((item2) => {
            if (item2.firstname + " " + item2.lastname == item1.patient) {
              setInfo1((prev) => [...prev, item2]);
            }
          });
        });
        setInfo2(res.data.data2);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(info1);
  console.log(info2);

  return (
    <div className="d-flex ">
      <div className="col-2 bg-light p-0">
        <Menu />
      </div>
      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
          &gt; Appointment &gt; Patient-Appointment
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Patient Appointment</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div style={{ display: "block", width: "100%" }}>
            <Tabs defaultActiveKey="first" className="bg-light">
              <Tab eventKey="first" title="Upcoming">
                <div className="ps-4 pe-4 pb-4 mt-4">
                  <div
                    className="table-header p-2 text-white fs-6"
                    style={{ background: "#307ECC", width: "100%" }}
                  >
                    Results for "Patient Appointments"
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ background: "#EFF3F8", width: "100%" }}
                  >
                    <div className="p-2 d-flex">
                      <label className="mt-2" style={{ minWidth: "120px" }}>
                        Display records
                      </label>
                      <select
                        name="dynamic-table_length"
                        aria-controls="dynamic-table"
                        className="form-select"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                    <div className="p-2 d-flex">
                      <label className="mt-2">Search:</label>
                      <input
                        type="search"
                        placeholder=""
                        aria-controls="dynamic-table"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <table
                    id="dynamic-table"
                    className="table table-striped table-bordered table-hover dataTable no-footer"
                    role="grid"
                    aria-describedby="dynamic-table_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="center sorting_disabled"
                          rowSpan="1"
                          colSpan="1"
                        >
                          <label className="pos-rel">
                            <input type="checkbox" className="ace" />
                            <span className="lbl"></span>
                          </label>
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Appointment ID: activate to sort column ascending"
                        >
                          Appointment ID
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Patient Name: activate to sort column ascending"
                        >
                          Patient Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Phone:activate to sort column ascending"
                        >
                          Phone
                        </th>
                        <th
                          className="hidden-480 sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Gender: activate to sort column ascending"
                        >
                          Gender
                        </th>
                        <th
                          className="hidden-480 sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Appointment Date: activate to sort column ascending"
                        >
                          Appointment Date
                        </th>
                        <th
                          className="hidden-480 sorting_disabled"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Status"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {info2.map((item, index) => {
                        {if(item.date>date){
                          return <tr key={index}>
                          <td>
                            <label className="pos-rel">
                              <input type="checkbox" className="ace" />
                              <span className="lbl"></span>
                            </label>
                          </td>
                          <td>{index + 1}</td>
                          <td>{item.patient}</td>
                          <td>{info1[index].phone}</td>
                          <td>{info1[index].gender}</td>
                          <td>{item.date}</td>
                          <td>{info1[index].status}</td>
                        </tr>
                        }}
                      })}
                    </tbody>
                  </table>
                  <div
                    className="d-flex justify-content-between p-2"
                    style={{ background: "#EFF3F8", width: "100%" }}
                  >
                    <div className=" d-flex">
                      <label className="">Showing 0 to 0 of 0 entries</label>
                    </div>
                    <div>
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="second" title="Previous">
                <div className="ps-4 pe-4 pb-4 mt-4">
                  <div
                    className="table-header p-2 text-white fs-6"
                    style={{ background: "#307ECC", width: "100%" }}
                  >
                    Results for "Patient Appointments"
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ background: "#EFF3F8", width: "100%" }}
                  >
                    <div className="p-2 d-flex">
                      <label className="mt-2" style={{ minWidth: "120px" }}>
                        Display records
                      </label>
                      <select
                        name="dynamic-table_length"
                        aria-controls="dynamic-table"
                        className="form-select"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                    <div className="p-2 d-flex">
                      <label className="mt-2">Search:</label>
                      <input
                        type="search"
                        placeholder=""
                        aria-controls="dynamic-table"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <table
                    id="dynamic-table"
                    className="table table-striped table-bordered table-hover dataTable no-footer"
                    role="grid"
                    aria-describedby="dynamic-table_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="center sorting_disabled"
                          rowSpan="1"
                          colSpan="1"
                        >
                          <label className="pos-rel">
                            <input type="checkbox" className="ace" />
                            <span className="lbl"></span>
                          </label>
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Appointment ID: activate to sort column ascending"
                        >
                          Appointment ID
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Patient Name: activate to sort column ascending"
                        >
                          Patient Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Phone:activate to sort column ascending"
                        >
                          Phone
                        </th>
                        <th
                          className="hidden-480 sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Gender: activate to sort column ascending"
                        >
                          Gender
                        </th>
                        <th
                          className="hidden-480 sorting"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Appointment Date: activate to sort column ascending"
                        >
                          Appointment Date
                        </th>
                        <th
                          className="hidden-480 sorting_disabled"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Center"
                        >
                          Center
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {info2.map((item, index) => {
                        {if(item.date<date){
                          return <tr key={index}>
                          <td>
                            <label className="pos-rel">
                              <input type="checkbox" className="ace" />
                              <span className="lbl"></span>
                            </label>
                          </td>
                          <td>{index + 1}</td>
                          <td>{item.patient}</td>
                          <td>{info1[index].phone}</td>
                          <td>{info1[index].gender}</td>
                          <td>{item.date}</td>
                          <td>{info1[index].status}</td>
                        </tr>
                        }}
                      })}
                    </tbody>
                  </table>
                  <div
                    className="d-flex justify-content-between p-2"
                    style={{ background: "#EFF3F8", width: "100%" }}
                  >
                    <div className=" d-flex">
                      <label className="">Showing 2 to 2 of 2 entries</label>
                    </div>
                    <div>
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

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

export default Patientappointment;
