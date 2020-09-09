import React, { createRef } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"


export default function Login(){
    
    const pseudo = createRef();
    const password = createRef();

    const verificationUser = () =>{
        
        // si le mot de passe n'est pas le meme que dans la db ne fonction pas 

        // sinon connection
    }

    return(
        <div>
            <Header/>
            <div className="title-block">
                <span className="rectangle-gauche"></span><h2 className="title-form">Login</h2><span className="rectangle-droit"></span>
            </div>
            <div className="container-form-login">
                <form className="form-register" onSubmit={verificationUser}>
                    <div className="input-pseudo">
                        <label>Pseudo : </label><input type="text" ref={pseudo} required/>
                    </div>
                    <div className="input-password">
                        <label>Password : </label><input type="password"  ref={password} required/>
                    </div>
                    <div className="input-submit">
                        <input className="btn-submit" type="submit" value="s'enregistrer"/>
                    </div>
                    <div className="link-register-login">
                        <Link to="/Register">Pas encore de compte ? s'enregistrer</Link>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>

    )
}