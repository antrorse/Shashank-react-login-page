import React, { useState } from 'react';
import '../App.css';


const validEmail = new RegExp('^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\\.([a-zA-Z]{2,})$');
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

function Login(props) {
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [loggedin, setLoggedin] = useState(false);
    const [emailError, setEmailError]=useState('');
    const [passwordError, setPasswordError]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!validEmail.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }

        if (!validPassword.test(password)) {
            setPasswordError('Password must contain at least 6 characters including letters and numbers');
        } else {
            setPasswordError('');
        }
        if (validEmail.test(email) && validPassword.test(password)) {
            console.log('Signup successful');
            setLoggedin(true);
        }
    }

  return (
    <center>
        {loggedin ? (
            <h1>You're logged in!</h1>
        ) : (
                  <form className='form-login' onSubmit={handleSubmit}>
                      <h1>Login Page</h1>
                      <input type='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }}></input><br></br>
                      {emailError && <span style={{ color: 'red' }}>{emailError}</span>}<br></br>
                      <input type='password' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
                      {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}<br></br>
                      <button type='submit' className='login-btn' onClick={handleSubmit}>Login</button><br></br>
                      <button className='sup-btn' onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup</button><br></br>
                  </form>
        )}
        
    </center>
  )
}

export default Login