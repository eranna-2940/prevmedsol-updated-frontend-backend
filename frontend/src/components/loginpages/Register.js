import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    gender: "",
    dob: "",
    bloodgroup: "",
    country: "",
    state: "",
    city: "",
    street1: "",
    street2: "",
    zipcode: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    // setValues((prev) => ({
    //   ...prev,
    //   [event.target.name]: [event.target.value],
    // }));
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    // setErrors(Validation(values));
    // if (errors.name === "" && errors.email === "" && errors.password === "" && errors.cnfpassword === "") {
   
    if(values.password !== values.cpassword){
      alert("Passwords don't match. Please check your input.");
      return;
    }
      axios
      .post("http://localhost:8080/register", values)
      .then((res) => {
        alert("New user registered successfully");
        // window.location.reload(false);
        navigate("/")
    })
    
      .catch((err) => console.log(err));
    // }
  };

  return (
    <>
      <div className="">
        <div
          className="m-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="">
            <form id="form1" action="" method="post" onSubmit={handleSubmit}>
              <div className="row">
                <div className="">
                  <div className="form-heading">
                    <h4 className="text-center text-primary">
                      Registration Form
                    </h4>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="First Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="middlename"
                        id="middlename"
                        placeholder="Middle Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        // required
                      />
                    </div>

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Last Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email ID"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                  {/* <span id="email_validation" className="error"></span> */}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm Password"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Mobile Number"
                    className="form-control m-1"
                    maxLength="10"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <div className="form-group2">
                    <select
                      id="bloodgroup"
                      name="bloodgroup"
                      className="form-select m-2"
                      onChange={handleInput}
                      required
                    >
                      <option value="">Select Blood group</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="Dontknow">Don`t know</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="me-3 mt-2">
                    <input
                      type="radio"
                      id="radio1"
                      value="male"
                      name="gender"
                      className="m-1"
                      onChange={handleInput}
                      required
                    />
                    <label> Male </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="radio"
                      id="radio2"
                      value="female"
                      name="gender"
                      className="m-1"
                      onChange={handleInput}
                      required
                    />
                    <label> Female </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="form-control m-1"
                    placeholder="Date of Birth (month/day/year)"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="">
                  
                  <div className="form-group2">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>

                  <div className="form-group2">
                    <input
                      type="text"
                      name="street1"
                      id="street1"
                      placeholder="Street1"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="street2"
                      id="street2"
                      placeholder="Street2"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      placeholder="Zip Code"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[0-9]{6}"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn btn-primary m-2 w-100"
                        id="btnregister"
                        name="btnregister"
                      >
                        Submit
                      </button>
                      <div className="text-center">
                        Existing User ?{" "}
                        <Link to='/patient' style={{ textDecoration: "none" }}>
                        Go to login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;