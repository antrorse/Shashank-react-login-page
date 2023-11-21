import React,{useState} from 'react';
import '../App.css';

const validEmail = new RegExp('^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\\.([a-zA-Z]{2,})$');
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
const validUsername = new RegExp('^[a-zA-Z0-9._-]{3,}$');

function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');


    const handleSubmit = (e) => {
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

        if (!validUsername.test(username)) {
            setUsernameError('Username must be at least 3 characters long');
        } else {
            setUsernameError('');
        }

        if (validEmail.test(email) && validPassword.test(password) && validUsername.test(username)) {
            console.log('Signup successful');
        }
    }

  return (
    <center>
            <form className='form-signup' onSubmit={handleSubmit}>
                <h1>Signup Page</h1>
                <input type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input><br></br>
                {usernameError && <span style={{ color: 'red' }}>{usernameError}</span>}
              <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
                {emailError && <span style={{ color: 'red' }}>{emailError}</span>}<br></br>
              <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
                {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}<br></br>
              <button type='submit' className='signup-btn' onClick={handleSubmit}>Signup</button><br></br>
              <button className='log-btn' onClick={()=>props.onFormSwitch('login')}>Already have an account? Login</button><br></br>
            </form>
    </center>
  )
}

export default Signup;