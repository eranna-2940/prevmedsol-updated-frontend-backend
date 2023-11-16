import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Doctor = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
})
// const history = useNavigate();

// const [errors, setErrors] = useState({})
const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    // localStorage.setItem('email', values.email)
}
const handleSubmit = (event) => {
    event.preventDefault();
  
        axios.post('http://localhost:8080/doctor', values)
            // console.log(values)
            .then(res => {
              console.log('success')
             } )
            .catch(err => console.log(err));
    
}

  return (
    <div
      className="d-flex justify-content-center "
      style={{ height: "60vh", alignItems: "center" }}
    >
      <div>
        <div className="text-center">
          <h4 style={{ padding: "25px" }}>Doctor Log In</h4>
        </div>
        <form method="post" action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="username"
              placeholder="User Name / Email"
              className="form-control"
              style={{ width: "350px" }}
              onChange={handleInput}
              required=""
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              style={{ width: "350px" }}
              onChange={handleInput}
              className="form-control"
              required=""
            />
          </div>
          <div>
            <button
              type="submit"
              name="btn-login"
              className="btn btn-primary w-100"
            >
              Log In
            </button>
          </div>
          <div className="text-center">
            <a href="#">
              Forgot Password?
            </a>
          </div>
         

        </form>
      </div>
    </div>
  );
};

export default Doctor;