import { useState } from 'react';

import AuthModel from '../../config/models/AuthModel';

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    AuthModel.register({displayName, email, password}).then(response => {
      if (response.status === 201) {
        AuthModel.login({email, password}).then(response => {
          localStorage.setItem("uid", response.signedJwt);
        })
      } else {
        setError(response.message);
      }
    })

  }
  return(
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{color: "red"}}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display Name</label>
        <input 
        type="text"
        name="displayName"
        onChange={e => setDisplayName(e.target.value)}
        value={displayName}
        />

        <label htmlFor="email">Email</label>
        <input 
        type="email"
        name="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
        />

        <label htmlFor="password">Password</label>
        <input 
        type="password"
        name="password"
        onChange={e => setPassword(e.target.value)}
        value = {password}
        />

        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}

export default Register;