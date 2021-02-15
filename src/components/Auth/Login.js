import { useState } from 'react';
import AuthModel from '../../config/models/AuthModel';

import { useHistory } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';
import { userState } from '../../config/recoil/atoms';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    AuthModel.login({email, password}).then(response => {
      if(response.status === 200) {
        localStorage.setItem("uid", response.signedJwt);
      } else {
        setError(response.message);
      }
    })
  }

  return (
    <div>
      <h2>Log In</h2>
      {error && <p style={{color: "red"}}>{error}</p>}

      <form onSubmit={handleSubmit}>

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
        value={password}
        />

        <input type="submit" value="Log In"/>
      </form>
    </div>
  )
}

export default Login;