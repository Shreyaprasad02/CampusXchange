import React from 'react'
import './Auth.css'
import Login from '../../img/login.png'

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <div className="Webname">
          <h1>CampusXchange</h1>
          <h6>Explore the ideas throughout the world</h6>
          <img src={Login} alt="" />
        </div>
      </div>
      <SignUp/>
      {/* <LogIn/> */}
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form>
        <h1>Login Here</h1>
        <input type='email' placeholder='Email'></input>
        <input
          type='password' placeholder='Password'></input>
        <div className='login'>
          <button className="button infoButton">Login</button>
        </div>

        <p>Don't have an account? Register</p>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h1>Sign up</h1>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>
        <button className="button infoButton" type="submit">Signup</button>
        <div>
          <p>Already have an account? Login</p>
        </div>

      </form>
    </div>
  );
}

export default Auth
