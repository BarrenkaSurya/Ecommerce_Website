import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './CSS/LoginSignIn.css';

const LoginSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signIn(email, password);
    if (success) {
      navigate("/"); // Redirect to homepage after successful login
    }
  };

  return (
    <div className='loginsignin'>
      <div className="loginsignin-container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignin-fields">
            <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className='loginsignup-login'>Don't have an account? <span><a href="/signup">SignUp here</a></span></p>
        <div className="loginsignin-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignIn;


