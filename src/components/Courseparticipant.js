import React, { createRef,useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import Maps from "./Maps";
import Balise from "./Balise";
import Axios from "axios";


function CourseParticipant(){
    const [lat,setLat] = useState("");
    const [lon,setLon] = useState("");
    const [balise,setBalise] = useState([]);
    const [course,setCourse] = useState([]);


    const nameCourse = createRef();
    const btnSubmit = createRef();
    const url = "https://localhost:44330/api/";

    navigator.geolocation.watchPosition(function(e){
        setLat(e.coords.latitude);
        setLon(e.coords.longitude);
    })

    const getParcours = (e) => {
        e.preventDefault();
        Axios.get(url+"Course")
        .then(function (response){
            setCourse(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        // getBalise();
    }

    // const getBalise = (e) =>{
    //     Axios.get(url + "Balise")
    //     .then(function (response){
    //         setBalise(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }

    return(
        <>
        <Header/>
        <div className="container-course">
            <div className="block-create-course">
                <h2> Les Parcours </h2>
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