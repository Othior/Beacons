import React, { createRef, useState } from "react"
import { BrowserRouter as Router, Route, Switch, Link ,Redirect} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Maps from "./Maps";
import Balise from "./Balise";
import Axios from "axios";


function Course() {

    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [balise, setBalise] = useState([]);

    const nameCourse = createRef();
    const btnSubmit = createRef();
    const url = "https://localhost:44330/api/";

    navigator.geolocation.watchPosition(function (e) {
        setLat(e.coords.latitude);
        setLon(e.coords.longitude);
    })

    const clickMap = (e) => {
        console.log("Lat : ", e.latlng.lat);
        console.log("Lng :", e.latlng.lng);
        console.log("-------------------");
        setBalise([...balise, {
            lat: e.latlng.lat,
            lon: e.latlng.lng
        }])
    }

    const sendDbBeacons = (e) => {

        e.preventDefault();

        Axios.post(url + "/Course", {
            Name: nameCourse.current.value,
            OrganizerId: 1
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            postBalise();
    }

    const postBalise = () => {
        balise.forEach(element => {
            Axios.post(url + "/Balise",{
                    Lat : element.lat,
                    Lon : element.lon,
                    IsFind: false,
                    CourseId:5,
                  })
                  .then(function (response) {
                    console.log(response.data);
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
        });
    }

    return (
        <>
        
            { localStorage.getItem("UserId") ? "" : <Redirect to="/Login"/> }
            <Header />
            <div className="container-course">
                <div className="block-create-course">
                    <h2>My Courses</h2>
                    <form onSubmit={(e) => sendDbBeacons(e)}>
                        <div className="input-name-course">
                            <label>Name Course :</label><input ref={nameCourse} type="text" />
                        </div>
                        <div className="input-btn-course">
                            <input ref={btnSubmit} type="submit" value="add Parcours" />
                        </div>
                        {/* <div className="input-btn-course">
                            <input type="button" onClick={(e) => postBalise(e)} value="send Beacons" />
                        </div> */}
                    </form>
                </div>
                <Maps clickBalise={(e) => clickMap(e)} lgla={[lat, lon]}>
                    {balise.map((item, index) => {
                        return (
                            <Balise key={index} lgla={[item.lat, item.lon]} text="Beacons is Find" />
                        )
                    })}
                </Maps>
            </div>
            <Footer />
        </>
    )
}
export default Course