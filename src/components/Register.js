import React, { createRef } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Axios from "axios";


export default function Register(){
    
    const pseudo = createRef();
    const firstname = createRef();
    const lastname = createRef();
    const email = createRef();
    const password = createRef();
    const Cpassword = createRef();
    const url = "https://localhost:44330/api/User";
    
    const registerUser = (ev) => {
        ev.preventDefault();

        // checked password is same
        if(password.value !== Cpassword.value){
            return(
            <p>Les mot de passe ne sont pas les mêmes ! , Veuiller remplir les champs pour pouvoir continué(e)s</p>
            )
        }
        else{
            
            Axios.post(url,{
                Pseudo : pseudo.current.value,
                Firstname : firstname.current.value,
                Lastname: lastname.current.value,
                Email: email.current.value,
                Password: password.current.value,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
        }
    }


    return(
        <>
            <Header/>
            <div className="title-block">
                <span className="rectangle-gauche"></span><h2 className="title-form">Register</h2><span className="rectangle-droit"></span>
            </div>
            <div className="container-form-register">
                <form onSubmit={(ev) => registerUser(ev)} className="form-register">
                    <div className="input-pseudo">
                        <label>Pseudo : </label><input type="text" ref={pseudo} required/>
                    </div>
                    <div className="input-firstname">
                        <label>Firstname : </label><input type="text" ref={firstname} required/>
                    </div>
                    <div className="input-lastname">
                        <label>Lastname : </label><input type="text" ref={lastname} required/>
                    </div>
                    <div className="input-email">
                        <label>Email : </label><input type="email" ref={email} required/>
                    </div>
                    <div className="input-password">
                        <label>Password : </label><input type="password"  ref={password} required/>
                    </div>
                    <div className="input-confirm-password">
                        <label>Confirm Password : </label><input type="password"  ref={Cpassword} required/>
                    </div>
                    <div className="input-submit">
                        <input className="btn-submit" type="submit" value="s'enregistrer"/>
                    </div>
                    <div className="link-register-login">
                        <Link to="/Login">Déjà un compte ? se connecter</Link>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}