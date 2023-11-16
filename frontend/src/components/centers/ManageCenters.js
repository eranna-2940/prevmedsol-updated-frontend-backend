import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";

const Managecenters = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/managecenters")
      .then((res) => {
        res.data.map((item) => {
          setCenters((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(centers);

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
          &gt; Centers &gt; Manage Centers
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Manage center</h4>
        <hr className="ms-4 me-4" />
        <div className="ms-4 me-4 d-flex justify-content-between">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link">
                <i className="bi bi-search"></i>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link">
                <i className="bi bi-copy"></i>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link">
                <i className="bi bi-database-fill"></i>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link">
                <i className="bi bi-printer-fill"></i>
              </Link>
            </li>
          </ul>

          <button
            style={{ width: "80px", height: "40px" }}
            className="btn btn-primary m-0"
          >
            <Link to="/addcenter" className="text-decoration-none text-white">Add</Link>
          </button>
        </div>
        <div className="ps-4 pe-4 pb-4">
          <div
            className="table-header p-2 text-white fs-6"
            style={{ background: "#307ECC", width: "100%" }}
          >
            Results for "Centers"
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
                <th className="center sorting_disabled" rowSpan="1" colSpan="1">
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
                  aria-label="ID: activate to sort column ascending"
                >
                  ID
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Name: activate to sort column ascending"
                >
                  Name
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Address:activate to sort column ascending"
                >
                  Address
                </th>
                <th
                  className="hidden-480 sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="City: activate to sort column ascending"
                >
                  City
                </th>
                <th
                  className="hidden-480 sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Timings: activate to sort column ascending"
                >
                  Timings
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
              {centers.map((item,index) => (
                <tr role="row" className="odd" key={index}>
                  <td className="center">
                    <label className="pos-rel">
                      <input type="checkbox" className="ace" />
                      <span className="lbl"></span>
                    </label>
                  </td>
                  <td>{index+1}</td>
                  <td>{item.centername}</td>

                  <td>{item.address}</td>

                  <td className="hidden-480">{item.city}</td>
                  <td className="hidden-480">{item.fromtiming} - {item.totiming}</td>

                  <td>
                    <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                      <a
                        className="blue"
                        //   href="/"
                        //   data-toggle="tooltip"
                        title="View"
                      >
                        <button
                          type="button"
                          className="btn btn-info"
                          // data-toggle="modal"
                          // data-target="#myModal25"
                        >
                          View
                        </button>
                      </a>

                      <Link
                        className="green"
                        //   href="http://prevmedsol.com/admin/edit_center/25"
                        to="/addcenter"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Link>
                      <a
                        className="red"
                        //   href="http://prevmedsol.com/admin/delete_center/25"
                        //   onclick="return checkDelete();"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="d-flex justify-content-between p-2"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
            <div className=" d-flex">
              <label className="">Showing 1 to 2 of 2 entries</label>
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

export default Managecenters;
