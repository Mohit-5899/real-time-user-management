import React from 'react';

function Login() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;