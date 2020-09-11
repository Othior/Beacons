import React, { createRef,useEffect,useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import Maps from "./Maps";
import Balise from "./Balise";
import Axios from "axios";
import { Redirect } from "react-router-dom";


function CourseParticipant(){
    const [lat,setLat] = useState("");
    const [lon,setLon] = useState("");
    const [balise,setBalise] = useState([]);
    const [course,setCourse] = useState([]);

    const url = "https://localhost:44330/api/";

    navigator.geolocation.watchPosition(function(e){
        setLat(e.coords.latitude);
        setLon(e.coords.longitude);
    })

    useEffect(()=>{
        Axios.get(url+"Course")
        .then(function (response){
            setCourse(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])
    
    const getParcours = (e) => {
        e.preventDefault();
        Axios.get(url + "Balise")
        .then(function (response){
            console.log(response.data);
            setBalise(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return(
        <>
        { localStorage.getItem("UserId") ? "" : <Redirect to="/Login"/> }
        <Header/>
        <div className="container-course">
            <div className="block-create-course">
                <h2> The Courses </h2>
                <div className="block-course-api">
                    <div className="input-display-course">
                        <input type="button" onClick={(e) => getParcours(e)} value="Affiche les Parcours"/> 
                    </div>
                    {course.map((item,index)=>(
                        <p className="Course-name" key={index}>{item.Name}</p>
                    ))}

                </div>
            </div>
            <Maps lgla={[lat,lon]}>
                {balise.map((item,index)=>(
                    <Balise key={index} lgla={[item.lat,item.lon]} text="Nouvelle balise" />
                ))}
            </Maps>
        </div>
        <Footer/>
        </>
    )
}

export default CourseParticipant