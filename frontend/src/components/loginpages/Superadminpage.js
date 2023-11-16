import React from 'react'

const Superadminpage = () => {
  return (
    
 <div className='d-flex justify-content-center ' style={{height:'60vh',alignItems:'center'}}>
    <div>
     <div className='text-center'>
    <h4 style={{padding:'25px'}}>Super Admin Log In</h4>
    </div>
      <form method="post" action="" >
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="Password" style={{width:'300px'}} className="form-control" required=""/>
        </div>
        <div>
          <button type="submit" name="btn-login" className="btn btn-primary w-100">Log In</button>
        </div>
        <div className='text-center'>
         <a href="#">Forgot Password?</a>
         </div>
      </form>
    </div>
  </div>


  )
}

export default Superadminpage;