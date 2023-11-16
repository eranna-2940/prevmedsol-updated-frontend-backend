import React, { useState } from "react";
import Menu from "../Menu";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddDoctor() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    hospital: "",
    specialization: "",
    address: "",
    country: "",
    state: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    // setErrors(Validation(values));
    // if (errors.name === "" && errors.email === "" && errors.password === "" && errors.cnfpassword === "") {
    axios.post("http://localhost:8080/adddoctor", values)
      .then((res) => {
        alert("Doctor added successfully");
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
    // }
  };

  return (
    <div className="d-flex left-div">
      <div className="col-2 bg-light p-0">
        <Menu />
      </div>

      <div className="col-10 p-0">
        {/* Right side */}

        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
          &gt; &nbsp; <Link to="/doctors"  className="text-decoration-none">Users</Link>&nbsp; &gt; Add Doctor
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Add Doctor</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form
              className="form-horizontal mb-4"
              action=''
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="form-group d-md-flex">
                <label className="col-sm-4 text-md-end text-primary">
                  First Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="First name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="firstname"
                    name="firstname"
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Last Name{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="lastname"
                    name="lastname"
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Gender{" "}
                </label>
                <div className="col-md-8">
                  <div className="radio-inline">
                    <label className="me-4">
                      <input
                        type="radio"
                        className="pms"
                        id="Mgender"
                        name="gender"
                        value="male"
                        onChange={handleInput}
                        required
                      />
                      <span className="lbl"> Male</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="pms"
                        id="Fgender"
                        name="gender"
                        value="female"
                        onChange={handleInput}
                        required
                      />
                      <span className="lbl"> Female</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Phone Number
                </label>
                <div className="col-sm-8">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="col-xs-10 col-sm-5 form-control"
                    id="phone"
                    maxLength="10"
                    name="phone"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric values only"
                    required
                  />
                  <span
                    id="phone_number_validation"
                    className="error"
                    style={{ color: "red" }}
                  ></span>
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Email
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    placeholder="sample@gmail.com"
                    className="col-xs-10 col-sm-5 form-control"
                    id="email"
                    name="email"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    placeholder="Password"
                    className="col-xs-10 col-sm-5 form-control"
                    id="password"
                    name="password"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Hospital
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="hospital"
                    name="hospital"
                    onChange={handleInput}
                    required
                  >
                    <option value="">Select</option>
                    <option value="test ">test </option>
                    <option value="Testing Center ">Testing Center </option>
                    <option value="PUJA ">PUJA </option>
                    <option value="Hyderabad ">Hyderabad </option>
                    <option value="Arunachal Pradesh Medical  ">
                      Arunachal Pradesh Medical{" "}
                    </option>
                    <option value="Muzzafarpur jaanch Centre ">
                      Muzzafarpur jaanch Centre{" "}
                    </option>
                    <option value="panji medical centre ">
                      panji medical centre{" "}
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Specialization
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="specialization"
                    name="specialization"
                    onChange={handleInput}
                  >
                    <option value="">Select</option>
                    <option value="cardiologist">Cardiologist</option>
                    <option value="neurologist">Neurologist</option>
                  </select>
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Address
                </label>
                <div className="col-sm-8">
                  <textarea
                    type="text"
                    placeholder="Enter your address"
                    className="col-xs-10 col-sm-5 form-control"
                    id="address"
                    name="address"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  Country
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Country"
                    className="col-xs-10 col-sm-5 form-control"
                    id="country"
                    name="country"
                    onChange={handleInput}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  State
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="State"
                    className="col-xs-10 col-sm-5 form-control"
                    id="state"
                    name="state"
                    onChange={handleInput}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                  City
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="City"
                    className="col-xs-10 col-sm-5 form-control"
                    id="city"
                    name="city"
                    onChange={handleInput}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="col-md-offset-3">
                  <button
                    className="btn btn-success"
                    type="submit"
                    id="btn-save"
                    name="btn-save"
                  >
                    <i className="bi bi-save2-fill"></i>&nbsp; Save
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn btn-danger" type="reset">
                    <i className="bi bi-trash-fill"></i>&nbsp; Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr></hr>
        <footer className="page-footer font-small bg-blue m-4">
          <div className="footer-copyright text-center">
            <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
            Copyrights © 2023
          </div>
        </footer>

        {/* Right side */}
      </div>
    </div>
  );
}
