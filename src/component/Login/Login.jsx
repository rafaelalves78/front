import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Container } from './style';
import logo from '../../image/logo.svg';
export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <>
      <Container>

        <div>
          <img src={logo} alt="logo" />
        </div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input
            type="email"
            placeholder="Digite seu email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>Password: </p>
          <input
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
        {/* <Link to="/signup">Signup</Link> */}
      </Container>
    </>
  )

}