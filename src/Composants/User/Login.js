import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Login.css";

function Login() {
  return (
    <form className="login-form">
    <h2>Connexion</h2>
    <p>Adresse e-mail :</p>
    <input type="email" placeholder="Adresse e-mail" />
    <p>Mot de passe :</p>
    <input type="password" placeholder="Mot de passe" />
    <Link to="/inscription">Pas encore inscrit ?</Link>
    <button type="submit">Se connecter</button>
  </form>
);
}

export default Login