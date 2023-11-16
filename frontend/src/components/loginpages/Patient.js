import React,{useState} from "react";
import axios from 'axios';

const Patient = () => {
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
  
        axios.post('http://localhost:8080/patient', values)
            // console.log(values)
            .then(res => {
                  if(res.username===res.password){
                    console.log('sucess')
                  }
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
          <h4 style={{ padding: "25px" }}>Patient Log In</h4>
        </div>
        <form method="post" action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name / Email"
              className="form-control"
              onChange={handleInput}
              style={{ width: "350px" }}
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
              className="form-control"
              onChange={handleInput}
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
          <div className="text-center" style={{padding:'45px'}}>
          <a href="#">
              New user? Create an account
            </a>
          
          </div>

        </form>
      </div>
    </div>
  );
};

export default Patient;