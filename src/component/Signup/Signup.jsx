import React, { useState } from 'react';
import { Container } from './style';
import logo from '../../image/logo.svg';
import { Link } from 'react-router-dom';

export default function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h1>Signup</h1>
      <form >
        <h2>Nome</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>Email</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <h2>Phone</h2>

        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
        />

        <h2>Password</h2>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <br />
        <br />
        <button>Signup</button>
      </form>
      <Link to="/login">Login</Link>
    </Container>
  )
}