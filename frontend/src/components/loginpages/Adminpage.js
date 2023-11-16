import React from 'react'
import { useNavigate } from 'react-router-dom';

const Adminpage = () => {
  const history = useNavigate()

  const handleclick=()=>{
      const name = document.getElementById('username').value;
      const password = document.getElementById('password').value;
       if(name === "admin" && password==="admin"){
          history('/dashboardPage')
       }
  }

  return (
    
 <div className='d-flex justify-content-center ' style={{height:'60vh',alignItems:'center'}}>
    <div>
     <div className='text-center'>
    <h4 style={{padding:'25px'}}>Admin Log In</h4>
    </div>
      <form method="post" action="" >
        <div className="form-group">
          <input type="text" id="username" name="username" placeholder="User Name" className="form-control" style={{width:'300px'}} required/>
        </div>
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="Password" style={{width:'300px'}} className="form-control" required/>
        </div>
        <div>
          <button type="submit" name="btn-login" onClick={handleclick} className="btn btn-primary w-100">Log In</button>
        </div>
        <div className='text-center'>
         <a href="#">Forgot Password?</a>
         </div>
      </form>
    </div>
  </div>


  )
}

export default Adminpage;