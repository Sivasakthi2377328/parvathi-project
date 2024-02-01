
import { Link } from 'react-router-dom';
import './Login.css'


function Signup()
{
    return(
      <div className='login'>
      <div className='form2'><center><h2 className='secondhalf'>we are the Lotus Team</h2>
      <br></br>
      
      <label  className='please'>Please create  your account</label>
      <br>
  
      </br>
      <input placeholder='Enter the Email Id'  className='username'></input>
      <br></br>
      <input placeholder="Create a New Password"  className='password1' ></input>
      <br></br>
      <input placeholder="Retype the New Password"  className='password' ></input>
      <br></br>
      <button type='submit' className='submit'> SIGN IN</button>
      <br></br>
      <Link to="/login" className='' style={{marginTop:"20px"}}> <label>Do you have an account?</label></Link>
      </center> </div>
      <div className='welcome2'>
        <h2 className='secondhalfs'>WELCOME TO PARVATHI KALAYANA STORE</h2>
      </div>
    </div>
   
         
       
    )
}
export default Signup;