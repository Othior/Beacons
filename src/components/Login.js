import React, { createRef, useState, useEffect } from "react"
import { BrowserRouter as  Router, Route, Switch,Link } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import Axios from "axios";


export default function Login(){
    
    const pseudo = createRef();
    const password = createRef();

    const [pseudoDb,setPseudoDb] = useState("");
    const [passwdDb,setPasswdDb] = useState("");
    const [arrayDb,setArrayDb] = useState([]);

    const url = "https://localhost:44330/api/User";

    const verificationUser = (e) =>{
        e.preventDefault();
        
        // si le mot de passe n'est pas le meme que dans la db ne fonction pas 

        // sinon connection
        console.log(pseudo.current.value);
        console.log(password.current.value);

        Axios.get(url)
          .then(function (response) {
            console.log(response.data);
            // setArrayDb(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    return(
        <div>
            <Header/>
            <div className="title-block">
                <span className="rectangle-gauche"></span><h2 className="title-form">Login</h2><span className="rectangle-droit"></span>
            </div>
            <div className="container-form-login">
                <form className="form-register" onSubmit={(e) => verificationUser(e)}>
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