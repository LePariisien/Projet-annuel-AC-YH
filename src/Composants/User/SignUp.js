import React from "react";
import { Link } from "react-router-dom";
import "../css/SignUp.css"

function SignUp() {
  return (
    <form className="inscription-form">
      <h2>Inscription</h2>
      <div className="row">
        <div className="column2">
          <p>Nom & Prénom :</p>
          <input type="text" placeholder="Nom & Prénom" />
          <p>Email :</p>
          <input type="email" placeholder="Email" />
          <p>Numéro de téléphone :</p>
          <input type="tel" placeholder="Numéro de téléphone" />
        </div>
        <div className="column2">
          <p>Adresse postale :</p>
          <input type="text" placeholder="Adresse postale" />
          <p>Password :</p>
          <input type="password" placeholder="Mot de passe" />
          <p>Confirm password :</p>
          <input type="password" placeholder="Confirmer le mot de passe" />
        </div>
      </div>
      <div className="button-group">
        <Link to="/">Déjà inscrit ?</Link>
        <button type="button">Paiement</button>
        <button type="submit">S'inscrire</button>
      </div>
    </form>
  );
}

export default SignUp;
