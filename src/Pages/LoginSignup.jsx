import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function LoginSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password);
    navigate('/');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className='loginsignup-login'>Already have an account? <span><a href="/signin">Login here</a></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' required />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;

