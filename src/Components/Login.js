import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';



function Login(){
  return(<div className='login'>
    <div className='form'><center><h2  className='s'>we are the Lotus Team</h2>
    <br></br>
    
    <label  className='please'>Please login to your account</label>
    <br>

    </br>
    <input placeholder='Username or Email'  className='username'></input>
    <br></br>
    <input placeholder="Password"  className='password' ></input>
    <br></br>
    <button type='submit' className='submit'> LOG IN</button>
    <br></br>
    <Link to="/signin" className='' style={{marginTop:"20px"}}> <label>Don't have an account?</label></Link>
    </center> </div>
    <div className='welcome'>
      <h2 className='secondhalf'>WELCOME TO PARVATHI KALAYANA STORE</h2>
    </div>
  </div>)
}
  
  

export default Login;